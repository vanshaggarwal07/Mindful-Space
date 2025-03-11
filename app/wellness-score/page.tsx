"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Heart, Brain, ArrowLeft, ArrowRight, BarChart, Clock, Activity, Smile, Frown } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function WellnessScorePage() {
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("dashboard")

  // Mock data for wellness scores
  const wellnessData = {
    overall: 78,
    sleep: 65,
    mood: 82,
    anxiety: 70,
    focus: 75,
    energy: 68,
  }

  // Mock data for weekly trends
  const weeklyData = [
    { day: "Mon", score: 72 },
    { day: "Tue", score: 68 },
    { day: "Wed", score: 75 },
    { day: "Thu", score: 80 },
    { day: "Fri", score: 76 },
    { day: "Sat", score: 82 },
    { day: "Sun", score: 78 },
  ]

  // Mock data for game activity
  const gameActivity = [
    { name: "Mindful Breathing", sessions: 12, lastPlayed: "Today" },
    { name: "Memory Match", sessions: 8, lastPlayed: "Yesterday" },
    { name: "Emotion Recognition", sessions: 5, lastPlayed: "3 days ago" },
    { name: "Gratitude Journal", sessions: 15, lastPlayed: "Today" },
  ]

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
            <Link href="/games" className="text-sm font-medium hover:text-primary transition-colors">
              Interactive Games
            </Link>
            <Link href="/wellness-score" className="text-sm font-medium text-primary">
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Wellness Score</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Track your mental wellness journey with personalized insights and progress tracking. Your data helps us
                provide tailored recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => setActiveTab("check-in")}>
                  Daily Check-In
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/games">Play Wellness Games</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="trends">Trends & Insights</TabsTrigger>
                <TabsTrigger value="check-in">Daily Check-In</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="md:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div>
                        <CardTitle>Overall Wellness Score</CardTitle>
                        <CardDescription>Your mental wellness at a glance</CardDescription>
                      </div>
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold">{wellnessData.overall}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mt-4 space-y-8">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Sleep Quality</span>
                            </div>
                            <span className="font-medium">{wellnessData.sleep}%</span>
                          </div>
                          <Progress value={wellnessData.sleep} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Smile className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Mood</span>
                            </div>
                            <span className="font-medium">{wellnessData.mood}%</span>
                          </div>
                          <Progress value={wellnessData.mood} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Activity className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Anxiety Level</span>
                            </div>
                            <span className="font-medium">{wellnessData.anxiety}%</span>
                          </div>
                          <Progress value={wellnessData.anxiety} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Brain className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Focus & Concentration</span>
                            </div>
                            <span className="font-medium">{wellnessData.focus}%</span>
                          </div>
                          <Progress value={wellnessData.focus} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Heart className="mr-2 h-4 w-4 text-muted-foreground" />
                              <span>Energy Level</span>
                            </div>
                            <span className="font-medium">{wellnessData.energy}%</span>
                          </div>
                          <Progress value={wellnessData.energy} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Weekly Trend</CardTitle>
                      <CardDescription>Your wellness score over the past week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px] flex items-end justify-between">
                        {weeklyData.map((day, i) => (
                          <div key={i} className="flex flex-col items-center gap-2">
                            <div
                              className="w-8 bg-primary/80 rounded-t-md transition-all hover:bg-primary"
                              style={{ height: `${day.score * 1.5}px` }}
                            ></div>
                            <span className="text-xs font-medium">{day.day}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Game Activity</CardTitle>
                      <CardDescription>Your recent wellness game activity</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {gameActivity.map((game, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <Heart className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <p className="font-medium">{game.name}</p>
                                <p className="text-xs text-muted-foreground">{game.sessions} sessions</p>
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">{game.lastPlayed}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/games">Play More Games</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Personalized Recommendations</CardTitle>
                    <CardDescription>Based on your wellness score and activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <Clock className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Improve Sleep Quality</p>
                          <p className="text-muted-foreground">
                            Try the Mindful Breathing exercise for 10 minutes before bed to improve your sleep quality
                            score.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <Brain className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Boost Focus</p>
                          <p className="text-muted-foreground">
                            Your focus score could use improvement. The Focus Trainer game can help strengthen your
                            concentration.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                          <Heart className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Energy Boost</p>
                          <p className="text-muted-foreground">
                            Your energy levels are lower than usual. Consider the Stress Relief exercises to rejuvenate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trends" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Wellness Trends</CardTitle>
                    <CardDescription>Track your progress over the past 30 days</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[300px] flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="h-16 w-16 text-primary/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        Detailed monthly trend visualization would appear here, showing your wellness score fluctuations
                        over time.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Wellness Insights</CardTitle>
                      <CardDescription>Patterns and observations from your data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-muted">
                          <h3 className="font-medium mb-2">Sleep and Mood Correlation</h3>
                          <p className="text-sm text-muted-foreground">
                            We've noticed that your mood score tends to be higher on days following good sleep quality.
                            Prioritizing sleep may help maintain positive mood.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg bg-muted">
                          <h3 className="font-medium mb-2">Game Activity Impact</h3>
                          <p className="text-sm text-muted-foreground">
                            Your anxiety levels show improvement on days when you engage with the Mindful Breathing
                            exercise. Consider making this a daily practice.
                          </p>
                        </div>

                        <div className="p-4 rounded-lg bg-muted">
                          <h3 className="font-medium mb-2">Weekly Patterns</h3>
                          <p className="text-sm text-muted-foreground">
                            Your wellness scores tend to dip mid-week. Consider scheduling more self-care activities
                            during this period.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Game Effectiveness</CardTitle>
                      <CardDescription>How different games impact your wellness</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>Mindful Breathing</span>
                            <span className="font-medium">Very Effective</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>Memory Match</span>
                            <span className="font-medium">Moderately Effective</span>
                          </div>
                          <Progress value={68} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>Gratitude Journal</span>
                            <span className="font-medium">Highly Effective</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span>Emotion Recognition</span>
                            <span className="font-medium">Effective</span>
                          </div>
                          <Progress value={75} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/games">Try More Games</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="check-in" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Wellness Check-In</CardTitle>
                    <CardDescription>How are you feeling today? This helps us track your progress.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <label className="font-medium">How would you rate your mood today?</label>
                        <div className="flex justify-between items-center pt-2">
                          <Frown className="h-6 w-6 text-muted-foreground" />
                          <Slider defaultValue={[50]} max={100} step={1} className="mx-4" />
                          <Smile className="h-6 w-6 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-medium">How was your sleep quality last night?</label>
                        <div className="flex justify-between items-center pt-2">
                          <Frown className="h-6 w-6 text-muted-foreground" />
                          <Slider defaultValue={[60]} max={100} step={1} className="mx-4" />
                          <Smile className="h-6 w-6 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-medium">What's your anxiety level right now?</label>
                        <div className="flex justify-between items-center pt-2">
                          <Smile className="h-6 w-6 text-muted-foreground" />
                          <Slider defaultValue={[30]} max={100} step={1} className="mx-4" />
                          <Frown className="h-6 w-6 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-medium">How's your energy level today?</label>
                        <div className="flex justify-between items-center pt-2">
                          <Frown className="h-6 w-6 text-muted-foreground" />
                          <Slider defaultValue={[70]} max={100} step={1} className="mx-4" />
                          <Smile className="h-6 w-6 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-medium">How would you rate your ability to focus today?</label>
                        <div className="flex justify-between items-center pt-2">
                          <Frown className="h-6 w-6 text-muted-foreground" />
                          <Slider defaultValue={[65]} max={100} step={1} className="mx-4" />
                          <Smile className="h-6 w-6 text-muted-foreground" />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      onClick={() => {
                        toast({
                          title: "Check-in Submitted!",
                          description: "Thank you for your daily wellness check-in. Your dashboard has been updated.",
                        })
                        setActiveTab("dashboard")
                      }}
                    >
                      Submit Check-In
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Journal Entry</CardTitle>
                    <CardDescription>Record your thoughts and feelings (optional)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <textarea
                      className="w-full h-32 p-3 rounded-md border border-input bg-transparent text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="How are you feeling today? What's on your mind?"
                    ></textarea>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Save Journal Entry
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
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
              <Link href="/games" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Interactive Games
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

