import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import { toggleStorageValue } from "@api/storage";

const HeartButton = ({
  travelId,
  isInStorage,
}: {
  travelId: number;
  isInStorage: boolean;
}) => {
  const [isMarked, setIsMarked] = useState(isInStorage);

  useEffect(() => {
    setIsMarked(isInStorage);
  }, [isInStorage]);

  const handleClickStored = async (e: any) => {
    e.stopPropagation();
    setIsMarked((prev: boolean) => !prev);
    await toggleStorageValue({
      travelId: travelId,
    });
  };
  return (
    <Icon
      icon={isMarked ? "FilledHeart" : "UnFilledHeart"}
      onClick={handleClickStored}
    />
  );
};

export default HeartButton;
