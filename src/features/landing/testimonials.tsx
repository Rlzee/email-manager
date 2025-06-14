"use client"

import { TestimonialsColumn } from "@/components/testimonials-columns"

const testimonials = [
  {
    text: "Finally, one inbox for everything! I connected my Gmail and Outlook accounts in seconds. It's become my daily command center.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Briana Patton",
    role: "Freelance Designer",
  },
  {
    text: "The setup was effortless. I love being able to reply to emails from multiple accounts without switching platforms.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Bilal Ahmed",
    role: "Startup Founder",
  },
  {
    text: "As someone managing 5 different emails, this tool saved me hours every week. The interface is clean and fast.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Saman Malik",
    role: "Project Manager",
  },
  {
    text: "I was skeptical at first, but this unified inbox is a game-changer. It's secure, fast, and super intuitive.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Omar Raza",
    role: "Digital Marketer",
  },
  {
    text: "I travel a lot, and accessing all my accounts from one place—even on mobile—is incredible. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Zainab Hussain",
    role: "Remote Consultant",
  },
  {
    text: "Customer support was super responsive when I had a sync issue. Got it solved within minutes. Great experience overall!",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Aliza Khan",
    role: "Sales Executive",
  },
  {
    text: "I use it daily to manage my personal, business, and newsletter accounts. Smooth and powerful interface.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Farhan Siddiqui",
    role: "Content Creator",
  },
  {
    text: "The ability to send from any connected address is brilliant. No more copy-pasting or tab-switching.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Sana Sheikh",
    role: "Executive Assistant",
  },
  {
    text: "Best productivity tool I’ve used this year. Centralizing all my inboxes has made my life 10x easier.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Hassan Ali",
    role: "Tech Blogger",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export function Testimonials() {
  return (
    <section className="py-16 md:py-32 scroll-mt-50 md:scroll-mt-0" id="testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col text-center">
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground lg:text-lg mb-6 md:mb-8 lg:mb-12">
            Real stories from people who’ve simplified their email workflow with our all-in-one inbox.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  )
}
