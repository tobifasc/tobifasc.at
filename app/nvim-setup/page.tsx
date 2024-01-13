import '../styles/globals.css';
import Link from 'next/link';
import { marked } from 'marked';

const mdSrc = `
## New to vim?

If you don't know how to use vim yet you should get started by launching neovim:

\`\`\`
$ nvim
\`\`\`

and then starting and working through the tutor by typing:

\`\`\`
:Tutor
\`\`\`

Or look for other basic tutorials on the internet.

## Configuration

If you already know your way aroung vim/neovim you can start customizing your experience. I'll show you how **MY** setup works but remember that there are many ways to do things and you might want to do it differently.

### init.lua

Create the necessary folders and files:

\`\`\`
$ mkdir ~/.config/nvim
$ touch ~/.config/nvim/init.lua
$ mkdir ~/.config/nvim/lua
$ touch ~/.config/nvim/lua/mappings.lua
\`\`\`

When starting neovim it will load init.lua. Inside the init.lua we will load other files (e.g. mappings.lua) by putting this inside init.lua:

\`\`\`
require('mappings')
\`\`\`

Notice that we don't need to specify the subfolder "lua" because neovim automatically looks for lua scripts inside the "lua" folder.

## Keymaps

Put the following in your mappings.lua:

\`\`\`
vim.g.mapleader = " "
vim.keymap.set("n", "<leader>p", vim.cmd.Explore)
\`\`\`

To try out your first mapping open a file with neovim e.g.:

\`\`\`
$ nvim ~/.config/nvim/init.lua
\`\`\`

and then type " p" (a space followed by "p"). This should open the dictionary, in which your current open file resides, in netrw. Congrats :). Feel free to extend this with your personal keymaps.

## Options

I like to have relative linenumbers with the current line showing the actual linenumber. To do this and also have space for other configuration-options create a new file:

\`\`\`
$ touch ~/.config/nvim/lua/options.lua
\`\`\`

and put the following inside:

\`\`\`
vim.opt.number = true
vim.opt.relativenumber = true
\`\`\`

Don't forget to extend your init.lua:

\`\`\`
require('mappings')
require('options')
\`\`\`

## Plugin manager

One possible plugin manager to use is [lazy.nvim](https://github.com/folke/lazy.nvim). We can set it up by creating a plugins.lua file in the lua folder with following content:

\`\`\`
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable",
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
  {
    "nvim-treesitter/nvim-treesitter", 
    build = ":TSUpdate", 
    config = function () 
      local configs = require("nvim-treesitter.configs")

      configs.setup({
        auto_install = true,
        highlight = { enable = true },
        indent = { enable = true },  
      })
    end
  },
})
\`\`\`

This installs the plugin manager as well as the plugin treesitter for syntax highlighting.

Don't forget to require "plugins" in init.lua.

  `;
  
function getMarkdownText() {
  var rawMarkup = marked.parse(mdSrc);
  return { __html: rawMarkup };
}

export default function NvimSetup() {
  return (
    <>
      <div className="container mx-auto text-center p-10">
        <h1 className="text-4xl md:text-7xl font-bold">Neovim-Setup</h1>
      </div>
      <div className="lg:mx-20 xl:mx-80 p-10 bg-stone-950/90">
        <div className="prose md:prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={getMarkdownText()}></div>
      </div>
    </>
  )
}
