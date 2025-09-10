"use client";

import Image from "next/image";
import { useState } from "react";
import {
  GlobeAltIcon, BriefcaseIcon, FilmIcon, HeartIcon, BoltIcon,
  MagnifyingGlassIcon, PaperAirplaneIcon, EyeIcon,
  ChevronLeftIcon, ChevronRightIcon,
  ChatBubbleOvalLeftEllipsisIcon, PlusIcon
} from "@heroicons/react/24/outline";
import IconCircle from "./(components)/IconCircle";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Sports");
  const categories = [
    { name: "Global", icon: <GlobeAltIcon className="h-5 w-5" /> },
    { name: "Business", icon: <BriefcaseIcon className="h-5 w-5" /> },
    { name: "Entertainment", icon: <FilmIcon className="h-5 w-5" /> },
    { name: "Sports", icon: <BoltIcon className="h-5 w-5" /> },
    { name: "Health", icon: <HeartIcon className="h-5 w-5" /> },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid grid-cols-12 gap-6">
        {/* 1) Tarjeta grande */}
        <article className="card col-span-12 md:col-span-8 flex gap-6">
          <div className="relative aspect-[16/11] md:w-[42%] w-1/2 overflow-hidden rounded-2xl">
            {/* Mujer usando laptop (tu imagen) */}
            <Image
              src="/istockphoto-1185293205-612x612.jpg"
              alt="Working on laptop"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-2xl font-semibold leading-tight text-slate-900">
              Green plants are going to Extinct about 500 times faster than they should, Study finds
            </h2>
            <p className="mt-3 text-slate-600 max-h-[4.5rem] overflow-hidden">
              If you are the sort of person who just can not keep a plant alive, you are not alone
              according to a new study published June 10 in the journal Nature..
            </p>

            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/avatar-alex.svg"
                  alt="Alexander Parkinson"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
                <div>
                  <div className="text-sm font-medium">Alexander Parkinson</div>
                  <div className="small-muted">Jun 20, 2019</div>
                </div>
              </div>
              <button className="btn btn-ghost">
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </article>

        {/* 2) Lista de categorías */}
        <aside className="card col-span-12 md:col-span-4">
          <div className="flex flex-col gap-3">
            {categories.map((c) => (
              <button
                key={c.name}
                onClick={() => setActiveCategory(c.name)}
                className={`flex items-center justify-between rounded-2xl px-3 py-2 ${
                  activeCategory === c.name ? "bg-indigo-50" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconCircle active={activeCategory === c.name}>{c.icon}</IconCircle>
                  <span className="text-sm font-medium">{c.name}</span>
                </div>
                {activeCategory === c.name && (
                  <span className="badge border-indigo-200 text-indigo-700">Selected</span>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* 3) Artículo con imagen naranja (tu imagen) */}
        <article className="card col-span-12 md:col-span-4">
          <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/1366_2000.jpg"
              alt="Headphones on orange background"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold leading-snug">
            How to make the perfect morning coffee, according to the Science
          </h3>
          <div className="mt-4 flex items-center gap-3">
            <Image
              src="/avatar-tara.svg"
              alt="Tara Gibson"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <div className="text-sm font-medium">Tara Gibson</div>
              <div className="small-muted">Jul 13, 2019</div>
            </div>
          </div>
        </article>

        {/* 4) Card de búsqueda (como el mockup) */}
        <section className="card col-span-12 md:col-span-4">
          <div className="rounded-2xl bg-slate-100 p-4">
            <div className="relative flex items-center">
              <input
                className="input pr-12"
                placeholder="Search for articles"
                aria-label="Search"
              />
              <button
                className="absolute right-2 grid size-10 place-content-center rounded-2xl bg-indigo-600 text-white"
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {["#Politics", "#Science", "#Movies", "#Technology"].map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5) Short Film (tu imagen morada) */}
        <article className="card col-span-12 md:col-span-4 flex items-center gap-4">
          <div className="relative aspect-video w-36 overflow-hidden rounded-xl">
            <Image
              src="/istockphoto-1397444575-612x612.jpg"
              alt="Headphones purple lighting"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 small-muted">
              <div className="size-2 rounded-full border border-indigo-500" />
              <span>Video</span>
            </div>
            <h3 className="mt-1 text-lg font-semibold">An Inspiring Short Film</h3>
            <div className="mt-3 flex items-center gap-2 small-muted">
              <EyeIcon className="h-5 w-5" />
              <span>80,989</span>
            </div>
          </div>
        </article>

        {/* 6) Perfil (tu imagen de escritorio) */}
        <aside className="card col-span-12 md:col-span-7 flex items-center gap-6">
          <div className="relative h-28 w-40 overflow-hidden rounded-2xl">
            <Image
              src="/istockphoto-1443305526-612x612.jpg"
              alt="Profile photo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="text-xl font-semibold">Alex Morrison</div>
            <div className="small-muted">Senior Journalist</div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[{ label: "Articles", value: "34" }, { label: "Followers", value: "980" }, { label: "Rating", value: "8.9" }].map(
                (s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center"
                  >
                    <div className="text-lg font-semibold">{s.value}</div>
                    <div className="small-muted">{s.label}</div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="btn btn-ghost">
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
              Chat
            </button>
            <button className="btn btn-primary">
              <PlusIcon className="h-5 w-5" />
              Follow
            </button>
          </div>
        </aside>

        {/* 7) Flechas + chips */}
        <div className="col-span-6 md:col-span-3 flex items-center justify-center gap-4">
          <button className="card p-3"><ChevronLeftIcon className="h-6 w-6" /></button>
          <button className="card p-3"><ChevronRightIcon className="h-6 w-6" /></button>
        </div>
        <div className="col-span-6 md:col-span-2 flex flex-wrap items-center gap-3">
          {["Donald Trump", "USA", "Politics", "2020"].map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
