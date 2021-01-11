import { FC, Fragment } from "react";
import { Card, CardContent, CardHeader } from "./ui/Card";

interface CardDetailsProps {
  id: string;
  title?: string;
  description: string;
  img?: string;
  showModal?: (id: string) => void;
  $width?: string | null;
  $size?: string | null;
}

const CardDetails: FC<CardDetailsProps> = ({
  title,
  img,
  description,
  id,
  showModal,
  $width,
  $size,
}) => {
  return (
    <Fragment>
      <Card
        $width={$width ? $width : false}
        onClick={() =>
          showModal ? (showModal as (id: string) => void)(id) : () => {}
        }
      >
        <CardHeader>
          {img ? (
            <img src={img} alt={description} loading="lazy" />
          ) : (
            <h3>{title}</h3>
          )}
        </CardHeader>
        <CardContent $size={$size ? $size : false}>
          <p>{description}</p>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default CardDetails;
