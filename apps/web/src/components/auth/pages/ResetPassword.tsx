'use client';

import React, { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@repo/ui/components/button';
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
import { Loader } from 'lucide-react';
import { schemas } from '@repo/ui/validations/authSchema';
import { toast } from 'sonner';
import { useResetPasswordMutation } from '../../../lib/features/services/auth/authApi';

const ResetPassword = ({ token }: { token: string }) => {
  const [resetPassword, { isLoading, isSuccess }] = useResetPasswordMutation();
  const form = useForm<z.infer<typeof schemas.auth.resetPassword>>({
    resolver: zodResolver(schemas.auth.resetPassword),
    mode: 'onChange',
    defaultValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  async function onSubmit(data: z.infer<typeof schemas.auth.resetPassword>) {
    await toast.promise(
      resetPassword({
        newPassword: data.newPassword,
        confirmNewPassword: data.confirmNewPassword,
        token: token,
      })
        .unwrap()
        .then((res) => {
          window.location.href = '/sign-in';
          return res;
        }),
      {
        loading: 'Changing your password, please wait...',
        success: (res) =>
          res?.message ||
          'Password updated successfully! You can now log in with your new password.',
        error: (err) =>
          err?.data?.message ||
          'Password reset verification failed. Please check the link and try again.',
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
                Reset Your Password
              </CardTitle>
              <CardDescription>
                Enter your new password below to securely reset your account
                password.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="space-y-6">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="confirmNewPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm New Password</FormLabel>
                            <FormControl>
                              <Input type="password" {...field} />
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
                        Reset Password
                      </Button>
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

export default ResetPassword;
