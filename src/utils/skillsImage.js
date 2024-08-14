// import gcp from '../assets/svg/skills/gcp.svg'
import html from '../assets/svg/skills/html.svg'
// import photoshop from '../assets/svg/skills/photoshop.svg'
// import illustrator from '../assets/svg/skills/illustrator.svg'
// import docker from '../assets/svg/skills/docker.svg'
// import adobeXd from '../assets/svg/skills/adobe-xd.svg'
// import afterEffects from '../assets/svg/skills/after-effects.svg'
import css from '../assets/svg/skills/css.svg'
// import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
// import nextJS from '../assets/svg/skills/nextJS.svg'
// import nuxtJS from '../assets/svg/skills/nuxtJS.svg'
import react from "../assets/svg/skills/react.svg";
import nodejs from '../assets/svg/skills/node-js.svg'

import bootstrap from '../assets/svg/skills/bootstrap.svg'

import documentation from '../assets/svg/skills/documentation.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import mongodb from "../assets/svg/skills/mongodb-original.svg";
import tailwindcss from "../assets/svg/skills/tailwind.svg";
import git from "../assets/svg/skills/git.svg";
import express from "../assets/svg/skills/express.svg";
import github from "../assets/svg/skills/github.svg";
import postman from "../assets/svg/skills/postman.svg";
import netlify from "../assets/svg/skills/netlify.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";





export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case "postman":
        return postman;
      case "git":
        return git;
      case "github":
        return github;

      case "express":
        return express;
      case "html":
        return html;
      case "documentation":
        return documentation;
      case "tailwindcss":
        return tailwindcss;
      case "nodejs":
        return nodejs;

      case "netlify":
        return netlify;
      // case 'illustrator':
      //     return illustrator;
      // case 'adobe xd':
      //     return adobeXd;
      // case 'after effects':
      //     return afterEffects;
      case "css":
        return css;
      // case 'angular':
      //     return angular;
      case "javascript":
        return javascript;
      // case 'next js':
      //     return nextJS;
      // case 'nuxt js':
      //     return nuxtJS;
      case "react":
        return react;

      case "bootstrap":
        return bootstrap;
      // case 'bulma':
      //     return bulma;
      // case 'capacitorjs':
      //     return capacitorjs;
      // case 'coffeescript':
      //     return coffeescript;
      case "mysql":
        return mysql;
      case "mongodb":
        return mongodb;

      // case 'postgresql':
      //     return postgresql;

      case "vitejs":
        return vitejs;
      // case 'vuetifyjs':
      //     return vuetifyjs;
      // case 'c':
      //     return c;
      // case 'c++':
      //     return cplusplus;
      // case 'c#':
      //     return csharp;
      // case 'dart':
      //     return dart;
      // case 'go':
      //     return go;
      // case 'java':
      //     return java;
      // case 'kotlin':
      //     return kotlin;
      // case 'julia':
      //     return julia;
      // case 'matlab':
      //     return matlab;
      // case 'php':
      //     return php;
      // case 'python':
      //     return python;
      // case 'ruby':
      //     return ruby;
      // case 'swift':
      //     return swift;
      // case 'adobe audition':
      //     return adobeaudition;
      // case 'aws':
      //     return aws;
      // case 'deno':
      //     return deno;
      // case 'django':
      //     return django;
      // case 'firebase':
      //     return firebase;
      // case 'gimp':
      //     return gimp;
      // case 'git':
      //     return git;
      // case 'graphql':
      //     return graphql;
      // case 'lightroom':
      //     return lightroom;
      // case 'materialui':
      //     return materialui;
      // case 'nginx':
      //     return nginx;
      // case 'numpy':
      //     return numpy;
      // case 'opencv':
      //     return opencv;
      // case 'premiere pro':
      //     return premierepro;
      // case 'pytorch':
      //     return pytorch;
      // case 'selenium':
      //     return selenium;
      // case 'strapi':
      //     return strapi;
      // case 'tensorflow':
      //     return tensorflow;
      // case 'webix':
      //     return webix;
      // case 'wordpress':
      //     return wordpress;
      // case 'azure':
      //     return azure;
      // case 'blender':
      //     return blender;
      // case 'fastify':
      //     return fastify;
      // case 'figma':
      //     return figma;
      // case 'flutter':
      //     return flutter;
      // case 'haxe':
      //     return haxe;
      // case 'ionic':
      //     return ionic;
      // case 'markdown':
      //     return markdown;
      // case 'microsoft office':
      //     return microsoftoffice;
      // case 'picsart':
      //     return picsart;
      // case 'sketch':
      //     return sketch;
      // case 'unity':
      //     return unity;
      // case 'wolframalpha':
      //     return wolframalpha;
      // case 'canva':
      //     return canva;

      default:
        break;
    }
}
