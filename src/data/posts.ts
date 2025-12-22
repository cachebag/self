export interface BlogPost {
  title: string;
  date: string; 
  content: string; 
}

export const posts: BlogPost[] = [
  {
    title: "If you want to be a good programmer, stop writing code and start reading it.",
    date: "2025-12-22",
    content: `
For a while in my life, it always felt like I was right on the edge of knowing what it was that interested me enough
to allow myself to be consumed by it, but I never could quite grasp it. Since high school I've kind of just hopped between interests but never really committed to any one thing- and this
was especially apparent in my failed attempt at [a career in music](https://soundcloud.com/alhakimiakrm). (Yes that's me; yes I am embarrassed of it).

Even in College, when I made the switch to Computer Science, it took me a while to find this niche I could operate in. Also, for some reason, I felt *very* strongly about 
making sure I did indeed find that niche. 

I think I made the _right_ decision to haphazardly write projects that had no real purpose other than to scratch an itch I had when I first really got into programming,
but I do believe if I had an oppurtunity to go back in time and do it again, I would have spent more time _reading code_ instead of writing it.

### Don't be a monkey on a keyboard
Obviously, this is a whole "hindsight is 20/20" situation and I'd never _really_ change anything and in fact, I'm actually quite content with the way things have turned out. 
But amongst the many things that I think students, junior developers, etc. lack when it comes to building their early careers, I believe that it's been a failure of the world 
to tell them that writing code is what's going to get them ahead.

Now, I think it's obvious that I don't believe writing code and buildings things is a hinderence to your learning in anyway. But I do think if I spent the amount of time I did building shitty
Python apps and React web pages, on reading open source code of my favorite tools instead, I'd probably be even further along the curve than I am now, which if I can humbly speak, 
is saying alot. 

### Read good code (or at least code that's touched a few hands in a larger project)
I've had the pleasure of doing so these last few months, starting with my first contributions to [rustup](https://github.com/rust-lang/rustup/pull/4459). I'm not exactly happy with the code I wrote,
or the amount of hesitation I showed in the PR; but the most important thing I still carry with me from that experience is the _process in which I understood the issue at hand, 
read through the codebase to find where I needed to make changes, and then finally made those changes_.

I learned more in that 3-4 days of working on that PR than I did in the last however many months I spent writing. And it sucked. I don't like reading my own code, so I couldn't imagine reading 
someone else's would be any better. I think the important distinction there was that the code I was reading was written by people _far_ more capable than I probably ever will be.

You also end up reaching a point where you start to become selective of the code you read. Personally, I enjoy tracing through call sites and mapping together each touch point of a method 
and seeing exactly what work it's doing and where. Thus, tools (such as rustup) and libraries that interface over a lower level protocol or API are really interesting to me.

For others, you might enjoy reading the abstractions. You may prefer to operate on a slightly less masked black box and prefer to write the abstraction layers of an application instead of the 
"under the hood" work (though I'd argue that you should still learn, for instance, how a UI framework operates under the hood before you hastily slap together a React web app to show your friends).

The point is, you will gain far more benefit from trying to decipher what someone else wrote, as opposed to writing your own stuff and still not really understanding it. Perhaps the inverse of
of the learning process is happening when you read someone else's code: instead of writing something and _maybe_ along the way you figure out how the pieces fit together; instead, you're forced to 
understand the pieces first, deconstruct them, and then reconstruct them again. Logically speaking, it would make sense then why reading documentation helps more than simply finding the info you need
from it and spitting the code into your IDE.

### Anyways..
Maybe this is already obvious to many. But personally, I can't say that this piece of advice has ever been suggested to me, or any of my peers at University. I think it's more than valid to write code 
because at the end of the day, you'll never really learn unless you get your hands on the code itself. But I think taking the slow approach will yield some greater benefits and help you not only write better 
code but also more deeply understand what it is you're writing in the first place, which in my opinion, is more impressive than simply knowing how to write a program. 
`
  }
];

