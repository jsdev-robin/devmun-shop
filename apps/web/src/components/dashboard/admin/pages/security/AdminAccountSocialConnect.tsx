import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { X } from 'lucide-react';
import {
  MetaIcon,
  GoogleIcon,
  DiscordIcon,
  GithubIcon,
  XIcon,
} from '@repo/ui/icons/index';

const AdminAccountSocialConnect = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Third-party accounts</CardTitle>
        <CardDescription>
          Connect your third-party accounts to your Etsy account to sign in and
          check out faster. Once you&apos;ve added a third-party account, you
          can disconnect it anytime here.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="w-full">
          <li className="flex items-center justify-between gap-4 border-b border-border py-4">
            <div className="flex items-center gap-4">
              <MetaIcon className="size-4" />
              <span className="text-xs font-medium">
                Meta account connected: <u>robin.rh656@gmail.com</u>
              </span>
            </div>
            <span className="cursor-pointer hover:text-destructive">
              <X className="size-4" />
            </span>
          </li>
          <li className="flex items-center justify-between gap-4 border-b border-border py-4">
            <div className="flex items-center gap-4">
              <GithubIcon className="size-4" />
              <span className="text-xs font-medium">
                <u>Connect your Github account</u>
              </span>
            </div>
          </li>
          <li className="flex items-center justify-between gap-4 border-b border-border py-4">
            <div className="flex items-center gap-4">
              <DiscordIcon className="size-4" />
              <span className="text-xs font-medium">
                <u>Connect your Discord account</u>
              </span>
            </div>
          </li>
          <li className="flex items-center justify-between gap-4 border-b border-border py-4">
            <div className="flex items-center gap-4">
              <GoogleIcon className="size-4" />
              <span className="text-xs font-medium">
                <u>Connect your Google account</u>
              </span>
            </div>
          </li>

          <li className="flex items-center justify-between gap-4 border-b border-border py-4">
            <div className="flex items-center gap-4">
              <XIcon className="size-4" />
              <span className="text-xs font-medium">
                <u>Connect your X account</u>
              </span>
            </div>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default AdminAccountSocialConnect;
