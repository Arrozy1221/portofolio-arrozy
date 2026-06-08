"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LangProvider";

function getProjectHref(project) {
  if (project.title === "MBKM UT + TTM App") {
    return "/case-study/mbkm-ut";
  }

  return project.link;
}

function isInternalProject(project) {
  return getProjectHref(project).startsWith("/");