"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    setSent(true);
  }

  return (
    <section id="contact" className="py-28">
      <div className="max-w-xl mx-auto px-6">
        <Card className="border-border bg-card shadow-2xl shadow-black/20">
          <CardHeader className="pb-4">
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-2">
              Say hi
            </p>
            <CardTitle className="text-3xl md:text-4xl font-bold">
              Send me a note.
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              I&apos;d love to hear from you.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {sent ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle className="h-12 w-12 text-primary" strokeWidth={1.5} />
                <p className="text-foreground font-medium">
                  Message ready. Thanks for saying hi.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSent(false)}
                  className="mt-2"
                >
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write something nice..."
                    rows={4}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full font-semibold shadow-lg shadow-primary/20"
                >
                  Send message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
