"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, Smile, Users, ArrowRight, CheckCircle, Menu, X } from "lucide-react"

export default function MentalHealthAwareness() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <IntroSection />
        <WarningSignsSection />
        <SelfCareSection />
        <WebinarsSection />
        <PodcastsSection />
        <StoriesSection />
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
          <Link href="/mental-health-awareness" className="text-sm font-medium text-primary transition-colors">
            Mental Health Awareness
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
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
              href="/mental-health-awareness"
              className="text-sm font-medium text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mental Health Awareness
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
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

function IntroSection() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Breaking the <span className="text-primary">Stigma</span> Together
          </h1>
          <p className="text-xl text-muted-foreground">
            Mental health is an essential component of our overall wellbeing, affecting how we think, feel, and navigate daily life. 
            Just like physical health, mental health exists on a spectrum and can change over time. Our mission is to raise awareness, 
            provide resources, and create a supportive community where everyone feels empowered to prioritize their mental wellbeing.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="text-left shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>What is Mental Health?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Mental health encompasses our emotional, psychological, and social well-being. It influences how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood through adulthood.</p>
                <p>Just as we all have physical health, we all have mental health. It's not simply the absence of mental illness—it's a state of well-being where individuals can cope with normal life stresses, work productively, and contribute to their communities.</p>
              </CardContent>
            </Card>
            
            <Card className="text-left shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Why Mental Health Awareness Matters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Despite affecting millions globally, mental health conditions often remain shrouded in stigma and misunderstanding. This silence prevents many from seeking help, worsening outcomes and isolating those who need support most.</p>
                <p>By promoting mental health awareness, we can create environments where people feel safe discussing their struggles, seeking treatment becomes normalized, and communities develop the knowledge to support those in need.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function WarningSignsSection() {
  const warningCategories = [
    {
      title: "Emotional Signs",
      icon: <Heart className="h-12 w-12 text-primary mb-4" />,
      signs: [
        'Persistent sadness or irritability',
        'Excessive fears, worries, or anxiety',
        'Extreme mood changes',
        'Feelings of guilt or worthlessness',
        'Inability to cope with daily problems'
      ]
    },
    {
      title: "Physical Signs",
      icon: <Brain className="h-12 w-12 text-primary mb-4" />,
      signs: [
        'Changes in sleep patterns',
        'Significant weight changes',
        'Low energy or fatigue',
        'Unexplained aches and pains',
        'Changes in appetite'
      ]
    },
    {
      title: "Behavioral Signs",
      icon: <Users className="h-12 w-12 text-primary mb-4" />,
      signs: [
        'Withdrawal from activities or relationships',
        'Reduced ability to function at work/school',
        'Increased substance use',
        'Difficulty concentrating',
        'Thoughts of harming oneself'
      ]
    }
  ]

  return (
    <section id="warning-signs" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recognizing Warning Signs</h2>
          <p className="text-xl text-muted-foreground">
            Being aware of potential warning signs can help you recognize when you or someone you care about might need support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {warningCategories.map((category, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center">{category.icon}</div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.signs.map((sign, i) => (
                    <li key={i} className="flex items-start gap-2 group">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 transition-transform group-hover:scale-110" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SelfCareSection() {
  const selfCareCategories = [
    {
      title: "Physical Self-Care",
      icon: <Users className="h-12 w-12 text-primary mb-4" />,
      description: "Maintaining your physical health directly impacts your mental wellbeing.",
      tips: [
        'Prioritize regular sleep patterns',
        'Stay physically active',
        'Eat nutritious meals',
        'Stay hydrated',
        'Take breaks from screens'
      ]
    },
    {
      title: "Emotional Self-Care",
      icon: <Heart className="h-12 w-12 text-primary mb-4" />,
      description: "Nurturing your emotional health helps build resilience.",
      tips: [
        'Practice mindfulness or meditation',
        'Journal about thoughts and feelings',
        'Engage in creative activities',
        'Set healthy boundaries',
        'Connect with supportive people'
      ]
    },
    {
      title: "Professional Support",
      icon: <Brain className="h-12 w-12 text-primary mb-4" />,
      description: "Sometimes we need expert guidance to navigate mental health challenges.",
      tips: [
        'Therapy or counseling',
        'Support groups',
        'Psychiatric services when needed',
        'Employee assistance programs',
        'Crisis intervention services'
      ]
    }
  ]

  return (
    <section id="self-care" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Practicing Self-Care</h2>
          <p className="text-xl text-muted-foreground">
            Self-care is essential for maintaining good mental health and building resilience against life's challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {selfCareCategories.map((category, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center">{category.icon}</div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 group">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 transition-transform group-hover:scale-110" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function WebinarsSection() {
  return (
    <section id="webinars" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Webinars</h2>
          <p className="text-xl text-muted-foreground">
            Expand your understanding of mental health through these informative webinars.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video w-full relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    className="absolute inset-0"
                    src={[
                      "https://www.youtube.com/embed/BvpmZktlBFs?si=JxxrVWjkBuVhP6-i",
                      "https://www.youtube.com/embed/f6CILJA110Y?si=kqcdv5G1PE04SsxA",
                      "https://www.youtube.com/embed/mbbMLOZjUYI?si=xWxww6l93c0gfIWa"
                    ][index-1]} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  />
                </div>
              </CardContent>
              <CardHeader>
                <CardTitle>{[
                  "Understanding Anxiety", 
                  "Mindfulness Practices", 
                  "Building Mental Resilience"
                ][index-1]}</CardTitle>
                <CardDescription>
                  Learn from mental health experts in this informative series
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function PodcastsSection() {
  return (
    <section id="podcasts" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mental Health Podcasts</h2>
          <p className="text-xl text-muted-foreground">
            Listen to these podcasts for insights, personal stories, and expert advice on mental wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <CardTitle>{[
                  "Navigating Depression", 
                  "Anxiety Management Techniques", 
                  "Finding Your Inner Strength"
                ][index-1]}</CardTitle>
                <CardDescription>
                  Episode {index} • {["28", "35", "42"][index-1]} minutes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <audio controls className="w-full">
                    <source src={`/podcast-${index}.mp3`} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {[
                    "A thoughtful discussion on depression, its impacts, and ways to seek help and support.",
                    "Practical techniques for managing anxiety in daily life, shared by mental health professionals.",
                    "Personal stories of resilience and growth through mental health challenges."
                  ][index-1]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function StoriesSection() {
  const stories = [
    {
      title: "Finding Light in Darkness",
      story: "For years, depression dimmed the colors in my world. Getting out of bed became my daily mountain to climb. When I finally reached out for help, it wasn't an immediate fix, but gradually, through therapy and medication, the fog began to lift. Today, I still have harder days, but I've learned to navigate them with tools I never had before. Recovery isn't about going back to who I was—it's about becoming someone stronger."
    },
    {
      title: "Breaking the Cycle of Anxiety",
      story: "My anxiety convinced me I couldn't handle life's challenges. Every worry spiraled into catastrophic thinking. Through cognitive behavioral therapy, I learned to recognize these patterns and challenge my anxious thoughts. Mindfulness practices helped me stay grounded in the present instead of fearing the future. Now I understand that anxiety doesn't define me—it's just one part of my experience that I've learned to manage."
    },
    {
      title: "The Journey to Self-Acceptance",
      story: "Living with bipolar disorder meant riding intense emotional waves that felt beyond my control. I blamed myself for not being 'normal' and hid my struggles from everyone. Connecting with a support group changed everything—hearing others speak openly about similar experiences made me feel less alone. With proper treatment and a community that understands, I've learned that my condition is just one aspect of who I am, not my entire identity."
    }
  ]

  return (
    <section id="stories" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recovery Stories</h2>
          <p className="text-xl text-muted-foreground">
            Hearing others' experiences can provide hope and reduce feelings of isolation. 
            These anonymous stories represent real journeys of recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20 bg-primary/10 flex items-center justify-center">
                    <Smile className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">"{story.story}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="group">
            Share Your Story
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
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
                <Link href="/mental-health-awareness" className="text-muted-foreground hover:text-primary transition-colors">
                  Mental Health Awareness
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
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
              <input
                placeholder="Enter your email"
                type="email"
                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
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
            &copy; {new Date().getFullYear()} MindfulSpace. All rights reserved.
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