"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, Smile, Users, ArrowRight, CheckCircle, Menu, X } from "lucide-react"
import { useState } from "react"
import coverphoto from '@/coverphoto.jpg';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">MindfulSpace</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/games" className="text-sm font-medium hover:text-primary transition-colors">
            Interactive Games
          </Link>
          <Link href="/wellness-score" className="text-sm font-medium hover:text-primary transition-colors">
            Wellness Score
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/edutech" className="text-sm font-medium hover:text-primary transition-colors">
            EduTech
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex gap-4">
        <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
         <Button variant="outline" size="sm">
            Log In
          </Button>
          </Link>

          <Link href="/signup" className="text-sm font-medium hover:text-primary transition-colors">
          <Button size="sm">Get Started</Button>
            
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6 border-t">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/games"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Interactive Games
            </Link>
            <Link
              href="/wellness-score"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Wellness Score
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/edutech"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              EduTech
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="flex gap-4 mt-6">
            <Button variant="outline" size="sm" className="w-full">
              Log In
            </Button>
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Begin Your Journey to <span className="text-primary">Mental Wellness</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
              Discover a path to inner peace and emotional balance with our personalized mental wellness programs,
              interactive games, and progress tracking.
            </p>


            <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signup" className="text-sm font-medium hover:text-primary transition-colors">
              <Button size="lg" className="px-8 group">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
              <Button size="lg" variant="outline" className="group">
                <Link href="/games" className="flex items-center">
                  Try Our Games
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-background overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=40&width=40&text=User${i}`}
                      alt="User"
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">500+</span> people joined this month
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-secondary/30 blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-500">
            <Image
  src={coverphoto}
  alt="Mental wellness illustration"
  width={0}
  height={0}
  className="w-full h-auto"
  priority
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "Personalized Approach",
      description: "Tailored mental wellness plans designed specifically for your unique needs and goals.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Expert Therapists",
      description: "Connect with licensed professionals specialized in various mental health disciplines.",
    },
    {
      icon: <Smile className="h-10 w-10 text-primary" />,
      title: "Interactive Games",
      description:
        "Engage with scientifically designed games that improve mental wellness while tracking your progress.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Wellness Tracking",
      description: "Monitor your mental health journey with our comprehensive wellness score dashboard.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Designed for Your Mental Wellness</h2>
          <p className="text-xl text-muted-foreground">
            Our comprehensive approach to mental wellness combines innovative tools with personalized care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-4 transform transition-transform hover:scale-110 duration-300">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="group">
            <Link href="/games">
              Explore Our Interactive Games
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const benefits = [
    "Evidence-based therapeutic approaches",
    "Interactive games for mental wellness",
    "Comprehensive wellness score tracking",
    "Secure and confidential environment",
  ]

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full z-0 animate-pulse"></div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full z-0 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-500">
              <Image
                src="/placeholder.svg?height=600&width=600&text=Our+Mission"
                alt="Our mission"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission for Mental Wellness</h2>
            <p className="text-lg text-muted-foreground">
              At MindfulSpace, we believe everyone deserves access to quality mental health support. Our mission is to
              break down barriers to mental wellness through accessible, personalized care that meets you where you are.
            </p>
            <p className="text-lg text-muted-foreground">
              We've developed interactive games and wellness tracking tools that make mental health improvement engaging
              and measurable, combining clinical expertise with innovative approaches.
            </p>

            <div className="space-y-3 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 group">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 transition-transform group-hover:scale-110" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group">
                Learn About Our Approach
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" asChild className="group">
                <Link href="/wellness-score">
                  View Wellness Tracking
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The interactive games have been a game-changer for my anxiety. I can actually see my progress through the wellness score tracking, which keeps me motivated.",
      author: "Sarah J.",
      role: "Member for 8 months",
    },
    {
      quote:
        "I was skeptical at first, but the holistic approach to wellness helped me address issues I didn't even realize were affecting my mental health. The mindfulness games are my favorite.",
      author: "Michael T.",
      role: "Member for 1 year",
    },
    {
      quote:
        "Being able to track my wellness score over time has given me incredible insights into what triggers my stress. The games make mental health work feel less like a chore.",
      author: "Elena R.",
      role: "Member for 6 months",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stories from Our Community</h2>
          <p className="text-xl text-muted-foreground">
            Hear from individuals who have transformed their mental wellness journey with our interactive tools and
            support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src={`/placeholder.svg?height=64&width=64&text=User${index + 1}`}
                      alt={testimonial.author}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <CardTitle className="text-center">{testimonial.author}</CardTitle>
                <CardDescription className="text-center">{testimonial.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: "Individual Therapy",
      description: "One-on-one sessions with licensed therapists tailored to your specific needs and goals.",
      price: "$85",
      period: "per session",
      image: "Individual.jpg",
    },
    {
      title: "Interactive Games",
      description:
        "Access to our full suite of mental wellness games with progress tracking and personalized recommendations.",
      price: "$45",
      period: "per month",
      image: "/placeholder.svg?height=120&width=120&text=Games",
    },
    {
      title: "Wellness Programs",
      description: "Comprehensive 8-week programs combining therapy, games, and wellness tracking for maximum results.",
      price: "$299",
      period: "per program",
      image: "/placeholder.svg?height=120&width=120&text=Programs",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mental Wellness Services</h2>
          <p className="text-xl text-muted-foreground">
            Explore our range of services designed to support your mental health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-40 bg-muted flex items-center justify-center">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={120}
                  height={120}
                  className="h-24 w-24 object-cover transition-transform hover:scale-110 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-baseline mt-4">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <span className="ml-1 text-muted-foreground">{service.period}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <Button className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Begin Your Wellness Journey Today</h2>
            <p className="text-lg text-muted-foreground">
              Have questions or ready to start? Reach out to our team for personalized support and guidance.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email Us</p>
                  <p className="text-muted-foreground">hello@mindfulspace.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Call Us</p>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Visit Us</p>
                  <p className="text-muted-foreground">123 Wellness Street, Mindful City</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-none shadow-lg transform transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    className="transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                    className="transition-all focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <Button type="submit" className="w-full group">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">MindfulSpace</span>
            </div>
            <p className="text-muted-foreground">
              Empowering individuals on their journey to mental wellness through personalized care, interactive games,
              and progress tracking.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-muted-foreground hover:text-primary transition-colors">
                  Interactive Games
                </Link>
              </li>
              <li>
                <Link href="/wellness-score" className="text-muted-foreground hover:text-primary transition-colors">
                  Wellness Score
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/edutech" className="text-muted-foreground hover:text-primary transition-colors">
                  EduTech
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Wellness Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Mental Health Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">Join our newsletter for mental wellness tips and updates.</p>
            <form className="space-y-2">
              <Input
                placeholder="Enter your email"
                type="email"
                className="transition-all focus:ring-2 focus:ring-primary/20"
              />
              <Button className="w-full group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} MindfulSpace. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
