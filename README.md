# Obsidian BookNav Plugin

This is a plugin to create clickable internal or external links in a note (usually at the bottom) to guide a reader along an intended path. There are no dependencies on any other plugins. If the note is viewed in another application, it will be shown as a code block.

## Usage

Add a code block with the language "booknav". Each line of the code block will be parsed as a link. Styling can be applied to each link if "alt" text is provided.

```
  ```booknav
    [[Page One | prev]]
    [[Page Three | next]]
  ```
```

