#!/bin/sh
if [ -z "$husky_skip_install" ]; then
  case $1 in
    install|uninstall)
      npm exec husky -- --$1
      ;;
  esac
fi
