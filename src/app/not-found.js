import Link from 'next/link';
import React from 'react';
import { Button } from '@heroui/react';
import { TriangleAlert } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-sky-950 flex items-center justify-center px-4">

      <div className="text-center max-w-2xl">

        <div className="flex justify-center mb-6">
          <div className="bg-red-500/10 p-6 rounded-full border border-red-500/20">
            <TriangleAlert className="text-red-500 w-16 h-16" />
          </div>
        </div>

        <h1 className="text-8xl font-extrabold text-white mb-4">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist or may have been moved.
          Don&apos;t worry, you can go back to the homepage and continue exploring.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <Link href="/">
            <Button
              className="bg-sky-500 text-white px-8 py-6 text-lg hover:bg-sky-600 transition-all duration-300"
            >
              Back To Home
            </Button>
          </Link>

          <Link href="/destinations">
            <Button
              variant="bordered"
              className="border-slate-400 text-white px-8 py-6 text-lg"
            >
              Explore Destinations
            </Button>
          </Link>

        </div>

        <div className="mt-14">
          <p className="text-slate-500 text-sm">
            Lost in the journey? Let&apos;s guide you back ✈️
          </p>
        </div>

      </div>
    </div>
  );
};

export default NotFoundPage;