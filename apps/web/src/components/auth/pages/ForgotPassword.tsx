'use client';

import React, { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button, buttonVariants } from '@repo/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Input } from '@repo/ui/components/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Loader, ChevronLeft } from 'lucide-react';
import { schemas } from '@repo/ui/validations/authSchema';
import Link from 'next/link';
import { toast } from 'sonner';
import { useForgotPasswordMutation } from '../../../lib/features/services/auth/authApi';
import { cn } from '@repo/ui/libs/utils';

const ForgotPassword = () => {
  const [forgotPassword, { isLoading, isSuccess }] =
    useForgotPasswordMutation();
  const form = useForm<z.infer<typeof schemas.auth.forgotPassword>>({
    resolver: zodResolver(schemas.auth.forgotPassword),
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });
  async function onSubmit(data: z.infer<typeof schemas.auth.forgotPassword>) {
    await toast.promise(
      forgotPassword(data)
        .unwrap()
        .then((res) => res),
      {
        loading: 'Sending password reset link...',
        success: (res) => {
          return (
            res?.message ||
            'Password reset link has been sent to your email. Please check your inbox (and spam folder) for instructions.'
          );
        },
        error: (err) =>
          err?.data?.message ||
          'We couldn’t send the reset link. Please double-check your email address and try again.',
      },
    );
  }

  useEffect(() => {
    if (isSuccess) {
      form.reset();
    }
  }, [form, isSuccess]);

  return (
    <section className="w-full">
      <div className="container max-w-md ">
        <div className="grid gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-poppins">
                Forgot your password?
              </CardTitle>
              <CardDescription>
                Enter your email address and we&apos;ll send you a link to reset
                your password.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid gap-6">
                    <div className="grid gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading && <Loader className="animate-spin" />}
                        Send Reset Link
                      </Button>
                      <Link
                        href="/sign-in"
                        className={cn(buttonVariants({ variant: 'link' }))}
                      >
                        <ChevronLeft />
                        Return to sign in
                      </Link>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
