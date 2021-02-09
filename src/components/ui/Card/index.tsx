import { FC } from "react";
import { CardWrapper, CardContent, CardHeader } from "./Card.styles";

interface CardDetailsProps {
  id: string;
  title?: string;
  description: string;
  img?: string;
  onClick?: () => void;
  $width?: string | null;
  $size?: string | null;
}

const Card: FC<CardDetailsProps> = ({
  title,
  img,
  description,
  id,
  onClick,
  $width,
  $size,
}) => {
  return (
    <CardWrapper $width={$width || false} onClick={onClick}>
      <CardHeader>
        {img && <img src={img} alt={description} loading="lazy" />}
        {title && <h3>{title}</h3>}
      </CardHeader>
      <CardContent $size={$size || false}>
        <p>{description}</p>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
