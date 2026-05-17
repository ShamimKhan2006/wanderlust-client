'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { RefreshCcw, Bug } from 'lucide-react';

const ErrorPage = ({ error, reset }) => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-red-950 px-4">

      <div className="max-w-2xl text-center">

        <div className="flex justify-center mb-6">
          <div className="p-6 rounded-full bg-red-500/10 border border-red-500/20">
            <Bug className="w-16 h-16 text-red-500" />
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Something Went Wrong
        </h1>

        <p className="text-slate-300 text-lg mb-3">
          An unexpected error has occurred.
        </p>

        <p className="text-slate-500 text-sm mb-8 break-words">
          {error?.message}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <Button
            onPress={() => reset()}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg"
          >
            <RefreshCcw className="mr-2 w-5 h-5" />
            Try Again
          </Button>

          <Link href="/">
            <Button
              variant="bordered"
              className="border-slate-400 text-white px-8 py-6 text-lg"
            >
              Back Home
            </Button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default ErrorPage;