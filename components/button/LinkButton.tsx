import { Button } from "@chakra-ui/react";

type Props = {
  icon: React.ReactElement;
  domain: string;
  id: string;
  color?: string;
  disabled?: boolean;
};

const LinkButton: React.FC<Props> = ({
  icon,
  domain,
  id,
  color,
  disabled = false,
}) => {
  return (
    <Button
      as={"a"}
      variant={"link"}
      href={"https://" + domain + "/" + id}
      leftIcon={icon}
      target={"_blank"}
      rel={"noopener noreferrer"}
      disabled={disabled}
    >
      {id}
    </Button>
  );
};

export default LinkButton;
