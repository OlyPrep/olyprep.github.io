+++
title = "Test"
authors = [ "Akib Azmain Turja" ]
date = 2025-10-30
template = "blog.html"
+++

# This is title

**This is bold**

_This is italic_

~~This is strike-through~~

## This is subtitle

<u>This is underline</u>

{% spoiler(title="This is") %}
```
a spoiler
```
{% end %}

{% quiz(options=["This is a option", "This is the option", "This is another option"], correct=1) %}
_This is a question_
{% end %}

{% quiz(options=["This is a option", "This is the option", "This is another option"], correct=1) %}
This is a **_question_**
{% end %}
