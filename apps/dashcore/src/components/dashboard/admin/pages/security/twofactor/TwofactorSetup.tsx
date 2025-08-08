'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { Button, buttonVariants } from '@repo/ui/components/button';
import TwoFactorSetupGuide from './TwoFactorSetupGuide';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { Badge } from '@repo/ui/components/badge';
import Link from 'next/link';
import {
  useConfirm2FASetupMutation,
  useGenerate2FASetupQuery,
} from '../../../../../../lib/features/services/auth/authApi';
import { cn } from '@repo/ui/libs/utils';
import useUser from '../../../../guard/useUser';

const verifyCodeSchema = z.object({
  code: z
    .string()
    .length(6, { message: 'Code must be exactly 6 digits' })
    .regex(/^\d{6}$/, { message: 'Invalid code format. Must be 6 digits.' }),
});

const TwofactorSetup = () => {
  const user = useUser();
  const { isLoading: loading, data: payload } = useGenerate2FASetupQuery(
    undefined,
    {
      pollingInterval: 100000,
    },
  );
  const [confirm2FASetup, { isLoading }] = useConfirm2FASetupMutation();

  const form = useForm<z.infer<typeof verifyCodeSchema>>({
    resolver: zodResolver(verifyCodeSchema),
    mode: 'onChange',
    defaultValues: {
      code: '',
    },
  });
  async function onSubmit(data: z.infer<typeof verifyCodeSchema>) {
    await toast.promise(
      confirm2FASetup({
        token: data.code,
        secret: payload?.data?.secret,
      })
        .unwrap()
        .then((res) => res),
      {
        loading: 'Signing in...',
        success: (res) => {
          return res?.message || 'Signed in successfully.';
        },
        error: (err) =>
          err?.data?.message || 'Something went wrong while signing in!',
      },
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <CardTitle>Two-factor methods</CardTitle>
          {user?.twoFA?.enabled && (
            <Badge
              variant="outline"
              className="text-green-600 bg-green-500/5 border-green-500"
            >
              Configured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <TwoFactorSetupGuide isLoading={loading} data={payload?.data} />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-3">
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Verify the code from the app</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="XXXXXX"
                          className="w-52"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-3">
                  <Button disabled={isLoading}>
                    {isLoading && <Loader className="animate-spin" />}
                    Save
                  </Button>
                  <Link
                    href="/admin/dashboard/overview"
                    className={cn(buttonVariants({ variant: 'destructive' }))}
                  ></Link>
                  <Button variant="destructive">Cancel</Button>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};

export default TwofactorSetup;
