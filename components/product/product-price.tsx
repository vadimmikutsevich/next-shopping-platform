import clsx from "clsx";

interface Props {
  className?: string;
  value: number;
}

const ProductPrice = ({ className, value }: Props) => {
  const stringValue = value.toFixed(2);

  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={clsx("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">{floatValue}</span>
    </p>
  );
};

export default ProductPrice;
