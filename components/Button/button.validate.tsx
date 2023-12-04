interface ButtonProps {
  text: string;
  variant: string;
  icon?: JSX.Element;
}

const validVariants = ['primary', 'secondary', 'outline'];

export default function validateButtonProps({
  text,
  variant,
  icon,
}: ButtonProps) {
  // Text validation
  if (!text) {
    throw new Error('Text is required. Please provide a text for the button');
  }

  if (typeof text !== 'string') {
    throw new Error(
      'Text must be a string. Please provide a valid text for the button',
    );
  }

  // Variant validation
  if (!variant) {
    throw new Error(
      'Variant is required. Please provide a variant (primary,secondary or outlined) for the button',
    );
  }

  if (!validVariants.includes(variant)) {
    throw new Error(
      `Variant must be one of the following: ${validVariants.join(
        ', ',
      )}. Please provide a valid variant for the button`,
    );
  }

  // Icon validation
  if (typeof icon === 'string' || typeof icon === 'number') {
    throw new Error(
      'Icon must be a React Icon JSX element. Please provide a valid icon for the button',
    );
  }
}
