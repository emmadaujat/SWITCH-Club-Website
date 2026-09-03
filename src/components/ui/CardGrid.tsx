type CardGridProps<T> = {
  items: T[];
  cardWidthPx: number;
  gapPx?: number; // must match the gap-* class below (gap-10 = 40px)
  cardsPerRow?: number;
  getKey: (item: T, index: number) => string;
  renderCard: (item: T, index: number) => React.ReactNode;
};

export default function CardGrid<T>({
  items,
  cardWidthPx,
  gapPx = 40,
  cardsPerRow = 3,
  getKey,
  renderCard,
}: CardGridProps<T>) {
  const maxWidth = cardsPerRow * cardWidthPx + (cardsPerRow - 1) * gapPx;

  return (
    <div
      className="mx-auto flex flex-wrap justify-center gap-10"
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {items.map((item, index) => (
        <div key={getKey(item, index)}>{renderCard(item, index)}</div>
      ))}
    </div>
  );
}
