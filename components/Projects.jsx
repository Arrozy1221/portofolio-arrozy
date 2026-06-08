"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "./LangProvider";

function ProjectCardContent({ project, t, featured }) {
  return (
    <>
      <div className={`project-thumb ${featured ? "" : ""}`}>
        {project.image && (
          <Image src={project.image} alt={project.title} fill className="object-cover" />