'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CalendarDays, Target, User } from 'lucide-react'
import Link from 'next/link'

import campaignPlaceholder from '@/assets/images/campaign-placeholder.jpg'

export default function CampaignCard ({ campaign }) {
  const {
    title = '',
    category = '',
    image = '',
    goalAmount = 0,
    raisedAmount = 0,
    creatorName = '',
    deadline = ''
  } = campaign || {}

  // Safe Numbers
  const safeGoal = Number(goalAmount) || 0
  const safeRaised = Number(raisedAmount) || 0

  // Progress Percentage
  const progress =
    safeGoal > 0 ? Math.min(Math.round((safeRaised / safeGoal) * 100), 100) : 0

  // Days Left
  const today = new Date()
  const endDate = deadline ? new Date(deadline) : today

  const daysLeft = Math.max(
    Math.ceil((endDate - today) / (1000 * 60 * 60 * 24)),
    0
  )

  // Image Source
  const imageSrc =
    image && image.startsWith('http') && !image.includes('example.com')
      ? image
      : campaignPlaceholder

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className='overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl'
    >
      {/* Campaign Image */}
      <div className='relative h-56 w-full overflow-hidden'>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className='object-cover transition duration-500 hover:scale-105'
        />

        <span className='absolute left-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white'>
          {category}
        </span>
      </div>

      {/* Card Content */}
      <div className='space-y-5 p-5'>
        {/* Title */}
        <div>
          <h3 className='line-clamp-2 text-xl font-bold text-gray-900'>
            {title}
          </h3>

          <div className='mt-3 flex items-center gap-2 text-sm text-gray-500'>
            <User size={16} />
            <span>{creatorName}</span>
          </div>
        </div>

        {/* Progress */}
        <div>
          <div className='mb-2 flex justify-between text-sm font-medium'>
            <span>{progress}% Funded</span>

            <span>
              ${safeRaised.toLocaleString()} / ${safeGoal.toLocaleString()}
            </span>
          </div>

          <div className='h-2 overflow-hidden rounded-full bg-gray-200'>
            <div
              className='h-full rounded-full bg-blue-600 transition-all duration-700'
              style={{
                width: `${progress}%`
              }}
            />
          </div>
        </div>

        {/* Bottom */}
        <div className='flex items-center justify-between border-t pt-4 text-sm text-gray-600'>
          <div className='flex items-center gap-2'>
            <Target size={16} />
            <span>Goal ${safeGoal.toLocaleString()}</span>
          </div>

          <div className='flex items-center gap-2'>
            <CalendarDays size={16} />
            <span>{daysLeft} Days Left</span>
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/campaigns/${campaign._id}`}
          className='block w-full rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition duration-300 hover:bg-blue-700'
        >
          View Details
        </Link>
      </div>
    </motion.div>
  )
}
