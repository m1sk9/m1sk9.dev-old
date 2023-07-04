import { Button } from "@chakra-ui/react";

type Props = {
  icon: React.ReactElement;
  href: string;
  color: string;
  disabled?: boolean;
};

const LinkButton: React.FC<Props> = ({
  icon,
  href,
  color,
  disabled = false,
}) => {
  return (
    <Button
      className={"hover:text-gray-600"}
      as={"a"}
      colorScheme={color}
      variant={"link"}
      href={href}
      leftIcon={icon}
      target={"_blank"}
      rel={"noopener noreferrer"}
      disabled={disabled}
    />
  );
};

export default LinkButton;
