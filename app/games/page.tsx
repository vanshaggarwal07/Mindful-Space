"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Heart, Brain, ArrowLeft, ArrowRight, Trophy, Activity } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function GamesPage() {
  const [activeTab, setActiveTab] = useState("all")
  const { toast } = useToast()

  return (
    <div className="flex min-h-screen flex-col">
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
            <Link href="/games" className="text-sm font-medium text-primary">
              Interactive Games
            </Link>
            <Link href="/wellness-score" className="text-sm font-medium hover:text-primary transition-colors">
              Wellness Score
            </Link>
          </nav>

          <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive Mental Wellness Games</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Engage with our scientifically designed games to improve your mental wellness while having fun. Each
                game targets different aspects of mental health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#games">
                    Start Playing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/wellness-score">View Your Progress</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="games" className="py-12 md:py-16">
          <div className="container">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Our Games Collection</h2>
                <TabsList>
                  <TabsTrigger value="all">All Games</TabsTrigger>
                  <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
                  <TabsTrigger value="cognitive">Cognitive</TabsTrigger>
                  <TabsTrigger value="emotional">Emotional</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MindfulBreathingGame />
                  <MemoryMatchGame />
                  <EmotionRecognitionGame />
                  <GratitudeJournalGame />
                  <StressReliefGame />
                  <FocusTrainerGame />
                </div>
              </TabsContent>

              <TabsContent value="mindfulness" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MindfulBreathingGame />
                  <GratitudeJournalGame />
                  <StressReliefGame />
                </div>
              </TabsContent>

              <TabsContent value="cognitive" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MemoryMatchGame />
                  <FocusTrainerGame />
                </div>
              </TabsContent>

              <TabsContent value="emotional" className="mt-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <EmotionRecognitionGame />
                  <GratitudeJournalGame />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/50">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">How Our Games Improve Mental Wellness</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our interactive games are designed by mental health professionals to target specific aspects of mental
                  wellness. Regular engagement with these games can lead to:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Brain className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Improved Cognitive Function</p>
                      <p className="text-muted-foreground">Enhance memory, attention, and problem-solving skills</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Heart className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Better Emotional Regulation</p>
                      <p className="text-muted-foreground">Learn to identify and manage emotions effectively</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Activity className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Reduced Stress and Anxiety</p>
                      <p className="text-muted-foreground">
                        Practice mindfulness techniques that calm the nervous system
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <Trophy className="h-3 w-3 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Increased Resilience</p>
                      <p className="text-muted-foreground">Build mental strength to better handle life's challenges</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-secondary/30 blur-3xl"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600&text=Mental+Games+Benefits"
                    alt="Mental wellness games benefits"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">MindfulSpace</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MindfulSpace. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/wellness-score"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Wellness Score
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MindfulBreathingGame() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [breathPhase, setBreathPhase] = useState("inhale")
  const [progress, setProgress] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const { toast } = useToast()

  useEffect(() => {
    let interval

    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1)

        // Alternate between inhale and exhale every 4 seconds
        if (seconds % 4 === 0) {
          setBreathPhase((prev) => (prev === "inhale" ? "exhale" : "inhale"))
        }

        // Update progress (max 100 seconds session)
        setProgress(Math.min((seconds / 100) * 100, 100))

        // End session after 2 minutes
        if (seconds >= 120) {
          clearInterval(interval)
          setIsPlaying(false)
          toast({
            title: "Session Complete!",
            description: "You've completed a 2-minute mindful breathing session.",
          })
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, seconds, toast])

  const handleStart = () => {
    setIsPlaying(true)
    setSeconds(0)
    setProgress(0)
    setBreathPhase("inhale")
  }

  const handleStop = () => {
    setIsPlaying(false)
    toast({
      title: "Session Paused",
      description: `You completed ${seconds} seconds of mindful breathing.`,
    })
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=200&width=200&text=Breathing"
          alt="Mindful Breathing"
          width={200}
          height={200}
          className="h-32 w-32 object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Mindful Breathing</CardTitle>
        <CardDescription>Practice controlled breathing to reduce stress and anxiety</CardDescription>
      </CardHeader>
      <CardContent>
        {isPlaying ? (
          <div className="space-y-4">
            <div
              className={`h-32 w-32 mx-auto rounded-full flex items-center justify-center bg-primary/10 transition-all duration-2000 ${breathPhase === "inhale" ? "scale-125" : "scale-75"}`}
            >
              <p className="text-lg font-medium">{breathPhase === "inhale" ? "Breathe In" : "Breathe Out"}</p>
            </div>
            <Progress value={progress} className="h-2 w-full" />
            <p className="text-center text-sm text-muted-foreground">
              Session time: {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, "0")}
            </p>
          </div>
        ) : (
          <p className="text-muted-foreground">
            This exercise guides you through timed breathing patterns to help calm your mind and reduce stress. Regular
            practice can lower anxiety and improve focus.
          </p>
        )}
      </CardContent>
      <CardFooter>
        {isPlaying ? (
          <Button variant="outline" className="w-full" onClick={handleStop}>
            End Session
          </Button>
        ) : (
          <Button className="w-full" onClick={handleStart}>
            Start Breathing Exercise
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

function MemoryMatchGame() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [score, setScore] = useState(0)
  const { toast } = useToast()

  const handleStart = () => {
    setIsPlaying(true)
    setScore(0)
    toast({
      title: "Game Started!",
      description: "Match the cards to test and improve your memory.",
    })
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=200&width=200&text=Memory+Match"
          alt="Memory Match Game"
          width={200}
          height={200}
          className="h-32 w-32 object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Memory Match</CardTitle>
        <CardDescription>Test and improve your memory with this card matching game</CardDescription>
      </CardHeader>
      <CardContent>
        {isPlaying ? (
          <div className="grid grid-cols-4 gap-2">
            {Array(16)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-primary/10 rounded-md cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => setScore((prev) => prev + 1)}
                ></div>
              ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            This game challenges your memory by asking you to match pairs of cards. Regular play can improve short-term
            memory and concentration.
          </p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {isPlaying && <p className="text-sm">Score: {score}</p>}
        <Button
          className={isPlaying ? "ml-auto" : "w-full"}
          onClick={isPlaying ? () => setIsPlaying(false) : handleStart}
        >
          {isPlaying ? "End Game" : "Start Memory Game"}
        </Button>
      </CardFooter>
    </Card>
  )
}

function EmotionRecognitionGame() {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=200&width=200&text=Emotion+Recognition"
          alt="Emotion Recognition"
          width={200}
          height={200}
          className="h-32 w-32 object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Emotion Recognition</CardTitle>
        <CardDescription>Improve your emotional intelligence by identifying emotions</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This game helps you recognize and understand different emotions in facial expressions. Improving emotional
          intelligence can enhance your relationships and social interactions.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start Emotion Game</Button>
      </CardFooter>
    </Card>
  )
}

function GratitudeJournalGame() {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=200&width=200&text=Gratitude+Journal"
          alt="Gratitude Journal"
          width={200}
          height={200}
          className="h-32 w-32 object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Gratitude Journal</CardTitle>
        <CardDescription>Cultivate positivity by recording things you're grateful for</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This interactive journal prompts you to record things you're grateful for each day. Regular gratitude practice
          has been shown to increase happiness and reduce depression.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start Journaling</Button>
      </CardFooter>
    </Card>
  )
}

function StressReliefGame() {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 bg-gradient-to-br from-teal-100 to-green-100 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=200&width=200&text=Stress+Relief"
          alt="Stress Relief"
          width={200}
          height={200}
          className="h-32 w-32 object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Stress Relief</CardTitle>
        <CardDescription>Interactive exercises to help you manage and reduce stress</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This collection of mini-games and exercises is designed to help you release tension and stress. Includes
          guided visualization, progressive muscle relaxation, and more.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start Stress Relief</Button>
      </CardFooter>
    </Card>
  )
}

function FocusTrainerGame() {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=200&width=200&text=Focus+Trainer"
          alt="Focus Trainer"
          width={200}
          height={200}
          className="h-32 w-32 object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>Focus Trainer</CardTitle>
        <CardDescription>Improve your concentration and attention span</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          This game challenges your ability to maintain focus on a specific task while ignoring distractions. Regular
          practice can improve attention span and productivity.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start Focus Training</Button>
      </CardFooter>
    </Card>
  )
}

