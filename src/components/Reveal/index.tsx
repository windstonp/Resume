import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { MutableRefObject, ReactNode, useEffect, useRef } from "react";

export type RevealProps = {
  children: ReactNode,
  amount?: number | "some" | "all" | undefined,
  direction?: "up" | "down" | "right" | "left",
  once?: boolean,
  container?: MutableRefObject<any>,
  className?: string,
}

export function Reveal({
  container, 
  amount = "some", 
  children, 
  direction = "left", 
  once = true,
  className
}: RevealProps){
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    amount,
    once,
    root: container
  });


  useEffect(() => {
    if(isInView){
      controls.start("visible");
    }else{
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const directions = {
    left: {
      x: -200
    },
    right: {
      x: 200,
    },
    down: {
      y: -200,
    },
    up:{
      y: 200
    }
  }

  const finalLocation = (['left', 'right'].includes(direction))
    ? { x: 0 }
    : { y: 0 };

  const variants: Variants = {
    hidden: {
      ...directions[direction],
      opacity: 0,
      visibility: "hidden",
    },
    visible: {
      ...finalLocation,
      opacity: 1,
      transition: {
        duration: 0.75
      },
      visibility: "visible"
    }
  }
  return(
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}