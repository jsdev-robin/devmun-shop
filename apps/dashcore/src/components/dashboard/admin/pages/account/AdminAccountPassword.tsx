'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { schemas } from '@repo/ui/validations/authSchema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import { Button } from '@repo/ui/components/button';
import Heading from '@repo/ui/components/heading';
import { Minus } from 'lucide-react';

const passwordRules = [
  'At least 8 characters',
  'At least 1 lowercase letter (a-z)',
  'At least 1 uppercase letter (A-Z)',
  'At least 1 number (0-9)',
  'At least 1 special character (!@#$%^&* etc.)',
];

const AdminAccountPassword = () => {
  const form = useForm<z.infer<typeof schemas.auth.passwordChange>>({
    resolver: zodResolver(schemas.auth.passwordChange),
    mode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  function onSubmit(data: z.infer<typeof schemas.auth.passwordChange>) {
    alert(JSON.stringify(data, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Manage your password settings. Choose a strong password to keep
              your account secure and up to date.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 grid-cols-3">
              <div className="col-span-2">
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="currentPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Password</FormLabel>
                        <FormControl>
                          <Input {...field} type="password" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Input {...field} type="password" />
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
                          <Input {...field} type="password" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit">Change Password</Button>
                </div>
              </div>
              <div className="col-span-1">
                <div className="space-y-6">
                  <Heading as="h6">New Password must contain:</Heading>
                  <ul>
                    {passwordRules.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Minus />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default AdminAccountPassword;
