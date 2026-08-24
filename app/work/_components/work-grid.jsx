'use client';

import { useMemo, useRef, useState } from 'react';

import Link from 'next/link';
import { CldImage } from 'next-cloudinary';

import { thumbnailOptions } from '@/data';
import { useFollowPointer } from '@/hooks';

import {
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailModal,
} from '../../_layout/thumbnail/components';
import { scaleUp } from '../../_layout/thumbnail/variants';

const filters = ['All', 'Design', 'Development'];

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [view, setView] = useState('list');
  const modal = useRef(null);
  const cursor = useRef(null);
  const label = useRef(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({ modal, cursor, label });

  const projects = useMemo(
    () =>
      thumbnailOptions
        .map((project, originalIndex) => ({ ...project, originalIndex }))
        .filter(
          ({ filter }) => activeFilter === 'All' || filter === activeFilter,
        ),
    [activeFilter],
  );

  return (
    <section
      className='relative'
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      <div className='flex flex-wrap items-center gap-3'>
        {filters.map(filter => (
          <button
            key={filter}
            type='button'
            className={`rounded-full border px-7 py-4 text-base transition-colors ${
              activeFilter === filter
                ? 'border-foreground bg-foreground text-background'
                : 'border-foreground/15 hover:border-foreground/40'
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
            {filter !== 'All' && (
              <sup className='ms-1 text-xs'>
                {thumbnailOptions.filter(
                  project => project.filter === filter,
                ).length}
              </sup>
            )}
          </button>
        ))}

        <div className='ms-auto flex gap-3'>
          {['list', 'grid'].map(nextView => (
            <button
              key={nextView}
              type='button'
              aria-label={`Use ${nextView} view`}
              aria-pressed={view === nextView}
              className={`flex size-16 items-center justify-center rounded-full border text-xl transition-colors ${
                view === nextView
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-foreground/15 hover:border-foreground/40'
              }`}
              onClick={() => setView(nextView)}
            >
              {nextView === 'list' ? '☰' : '⊞'}
            </button>
          ))}
        </div>
      </div>

      {view === 'list' ? (
        <div className='mt-28'>
          <div className='grid grid-cols-[minmax(10rem,2fr)_1fr_1.4fr_auto] gap-6 border-b border-foreground/15 px-8 pb-5 text-xs uppercase tracking-[0.12em] text-muted-foreground max-md:hidden'>
            <span>Client</span>
            <span>Location</span>
            <span>Services</span>
            <span>Year</span>
          </div>
          <ul>
            {projects.map(project => (
              <li key={project.href} className='border-b border-foreground/15'>
                <Link
                  href={project.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group grid grid-cols-[minmax(10rem,2fr)_1fr_1.4fr_auto] items-center gap-6 p-8 transition-opacity hover:opacity-60 max-md:flex max-md:flex-col max-md:items-start max-md:gap-3 max-md:px-0'
                  onPointerEnter={({ clientX, clientY }) => {
                    handlePointerEnter(project.originalIndex);
                    moveItems(clientX, clientY);
                  }}
                  onPointerLeave={({ clientX, clientY }) => {
                    handlePointerLeave(project.originalIndex);
                    moveItems(clientX, clientY);
                  }}
                >
                  <h2 className='text-[clamp(2rem,4vw,4.5rem)] leading-none'>
                    {project.title}
                  </h2>
                  <span className='text-base text-muted-foreground'>
                    <span className='me-2 text-xs uppercase tracking-[0.12em] md:hidden'>
                      Location
                    </span>
                    {project.location}
                  </span>
                  <span className='text-base text-muted-foreground'>
                    <span className='me-2 text-xs uppercase tracking-[0.12em] md:hidden'>
                      Services
                    </span>
                    {project.services}
                  </span>
                  <span className='text-base text-muted-foreground'>
                    <span className='me-2 text-xs uppercase tracking-[0.12em] md:hidden'>
                      Year
                    </span>
                    {project.year}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className='mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2'>
          {projects.map(project => (
            <Link
              key={project.href}
              href={project.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group block'
            >
              <div className='relative aspect-[4/3] overflow-hidden rounded bg-secondary-foreground'>
                <CldImage
                  src={project.image}
                  config={
                    project.cloudName
                      ? { cloud: { cloudName: project.cloudName } }
                      : undefined
                  }
                  fill
                  quality='auto'
                  format='auto'
                  loading='lazy'
                  className='object-cover transition-transform duration-500 ease-out group-hover:scale-105'
                  alt={`${project.title} thumbnail image`}
                />
              </div>
              <div className='mt-4 flex items-center justify-between gap-4'>
                <h2 className='text-2xl'>{project.title}</h2>
                <span className='text-sm text-muted-foreground'>
                  {project.services}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      <ThumbnailModal
        ref={modal}
        variants={scaleUp}
        active={active}
        index={index}
        className='pointer-events-none fixed left-1/2 top-1/2 aspect-[4/3] w-[min(38vw,36rem)] overflow-hidden bg-[#f1f1f1] p-6 max-md:hidden'
        imageClassName='object-contain'
      />
      <ThumbnailCursorCircle ref={cursor} variants={scaleUp} active={active} />
      <ThumbnailCursorLabel ref={label} variants={scaleUp} active={active}>
        View
      </ThumbnailCursorLabel>
    </section>
  );
}
