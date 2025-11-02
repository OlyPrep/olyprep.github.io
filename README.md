# OlyPrep

Welcome! This repository hosts the source code and all the written content for the [OlyPrep](https://olyprep.github.io) website. 

If you're here to learn, we recommend visiting the website directly. If you're here to contribute, this guide will walk you through the process of authoring content.

The process of writing content has been designed for simplicity. No technical knowledge is required to contribute, as contributions are made primarily through simple text files.

## Table of Contents

- [The Basics: How Content Files Work](#the-basics-how-content-files-work)
- [Content Hierarchy](#content-hierarchy)
- [File Reference](#file-reference)
  - [Track Files](#track-files)
  - [Unit Files](#unit-files)
  - [Lesson Files](#lesson-files)
- [Writing Lesson Content](#writing-lesson-content)
  - [Text and Formatting (Markdown)](#text-and-formatting-markdown)
  - [Interactive Elements (Shortcodes)](#shortcode-reference)
- [Shortcode Reference](#shortcode-reference)
  - [General Syntax](#general-syntax)
  - [`spoiler`](#spoiler)
  - [`quiz`](#quiz)

## The Basics: How Content Files Work

Every piece of content on the website is a simple text file (`.md`). At the very top of each file, there is a configuration block enclosed by `+++` symbols. This block contains settings for the page, like its title.

```
+++
# Settings go here
+++

(Main content goes here)
```

Settings are defined with a name and a value, like `title = "My Title"`.

Sometimes, related settings are grouped together under a section header, which is a name in square brackets, like `[extra]`. You can even have sections within sections, like `[extra.groups]` which defines a `groups` section inside of `extra`.

## Content Hierarchy

The content is organized into a three-level hierarchy, similar to a book:

1.  **Track**: The main subject (like a book). Examples: "IOI", "Math Olympiad".
2.  **Unit**: A chapter within a track. Example: "Number Theory".
3.  **Lesson**: A single page or topic within a unit.

The folder structure in `content/` matches this: `content/<track_name>/<unit_name>/<lesson_name>.md`.

## File Reference

This section details the settings for each type of content file.

### Track Files

A track is the highest-level category. It is defined by an `_index.md` file placed in a track's main folder.

-   **File Location**: `content/<track_name>/_index.md`

**Settings:**

| Setting Name    | Description                                                                                                                                         |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`         | The official name of the track (e.g., `"Math Olympiad"`).                                                                                           |
| `template`      | This should always be `"track.html"`.                                                                                                               |
| `description`   | A detailed description of the track's subject matter.                                                                                               |
| `hook_title`    | (Under the `[extra]` section) A short, catchy title for the track card on the website homepage.                                                     |
| `hook_subtitle` | (Under the `[extra]` section) A short, descriptive subtitle for the track card on the website homepage.                                             |
| `units`         | (Under the `[extra]` section) A list of the unit folder names that belong to this track. The order in the list determines the order on the website. |

**Example:**

```
+++
title = "IMO"
template = "track.html"
description = "From number theory to combinatorics, master the art of mathematical problem-solving."

[extra]
hook_title = "Math"
hook_subtitle = "Master the art of mathematical problem-solving."
units = [ "number-theory", "algebra" ]
+++
```

### Unit Files

A unit is a "chapter" within a track. It is defined by an `_index.md` file inside a unit's folder.

-   **File Location**: `content/<track_name>/<unit_name>/_index.md`

**Settings:**

| Setting Name     | Description                                                                                                                                                                                                               |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`          | The name of the unit (e.g., `"Number Theory"`).                                                                                                                                                                           |
| `template`       | This should always be `"unit.html"`.                                                                                                                                                                                      |
| `description`    | A short description of what the unit covers.                                                                                                                                                                              |
| `[extra.groups]` | This defines the `[extra.groups]` section. It lets you group lessons within the unit under subheadings. Each group has a title and a list of lesson filenames. The order in the list determines the order on the website. |

**Example:**

```
+++
title = "Number Theory"
template = "unit.html"
description = "Exploring the properties of integers."

[extra.groups]
"Divisibility" = [ "division-algorithm", "modular-arithmetic" ]
"Prime Numbers" = [ "sieve-of-eratosthenes" ]
+++
```

### Lesson Files

A lesson is a single content page.

-   **File Location**: `content/<track_name>/<unit_name>/<lesson_name>.md`

**Settings:**

| Setting Name  | Description                                                            |
|---------------|------------------------------------------------------------------------|
| `title`       | The title of the lesson.                                               |
| `template`    | This should always be `"lesson.html"`.                                 |
| `description` | A brief summary of the lesson's content, used for search and previews. |

**Example:**

```
+++
title = "The Division Algorithm"
template = "lesson.html"
description = "Understanding the foundation of number theory: a = bq + r."
+++

(The main text of the lesson starts here...)
```

## Writing Lesson Content

### Text and Formatting (Markdown)

The main content of a lesson file is written in plain text using a simple formatting system called Markdown. Here are some common examples for single-line formatting:

| Style         | Syntax               | Example          |
| ------------- | -------------------- | ---------------- |
| Heading 1     | `# Heading Text`     | # Heading Text   |
| Heading 2     | `## Heading Text`    | ## Heading Text  |
| Bold          | `**text**`           | **text**         |
| Italic        | `*text*` or `_text_` | *text*           |
| Bold & Italic | `***text***`         | ***text***       |
| Inline Code   | `` `code` ``         | `code`           |
| Inline LaTeX  | `$f(x) = x^2$`       | $f(x) = x^2$     |

For a complete guide on all available formatting options, please refer to the [CommonMark Reference](https://commonmark.org/help/).

#### Code Blocks

To display multiple lines of code, wrap your code in triple backticks (<code>```</code>). You can also specify the programming language after the opening backticks for syntax highlighting.

    ```
    print("Hello, World!")
    a = 1 + 1
    ```

#### LaTeX Blocks

For mathematical formulas or equations that need to be on their own line, wrap them in double dollar signs (```$$```).

    $$
    \sum_{i=1}^n i = \frac{n(n+1)}{2}
    $$


### Interactive Elements (Shortcodes)

To add special elements like quizzes or collapsible spoilers, you can use **Shortcodes**. These are special commands you can type directly into your text. See the [Shortcode Reference](#shortcode-reference) below for a full list.

## Shortcode Reference

### General Syntax

Shortcodes have a start tag and an end tag. The start tag includes the shortcode's name and its settings (called parameters). The content that the shortcode affects goes between the start and end tags.

```
{% shortcode_name(parameter="value") %}
  Content to be affected by the shortcode.
{% end %}
```

### `spoiler`

This shortcode creates a collapsible block of text that is hidden until clicked.

**How to use it:**

```
{% spoiler(title="Click to reveal a hint") %}
  This is the hidden content.
  It can be multiple lines.
{% end %}
```

**Settings:**

-   `title`: The text that is always visible. If you don't provide a title, it will just say "Spoiler".

**Body:**

The content between the `spoiler` and `end` tags is what will be hidden.

### `quiz`

This shortcode creates a multiple-choice question.

**How to use it:**

```
{% quiz(options=["Answer 1", "Answer 2", "Answer 3"], correct=1) %}
  Your **question** text goes here.
{% end %}
```

**Settings:**

-   `options`: A list of possible answers, each enclosed in quotes and separated by commas.
-   `correct`: The correct answer. **Important:** This is a number that counts from 0. So, `correct=0` is the first answer, `correct=1` is the second, and so on.

**Body:**

The text between the `quiz` and `end` tags is the question itself.
