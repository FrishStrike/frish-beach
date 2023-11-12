import { forwardRef } from "react";

import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  props?: InputProps;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="text"
        {...props}
        className={twMerge(
          `
      w-[350px]
      outline-none
      bg-neutral-700
      border-none
      rounded-lg
      border-white
      text-lg
      font-normal
      px-4
      py-3`,
          className
        )}
        ref={ref}
      />
    );
  }
);

export default Input;
