import { InfoItem } from "./InfoItem";

export function InfoSet({ name, itemName, items }) {
  return (
    <div>
      <h4 className="heading-quaternany">{name}</h4>
      <ul className="info-set">
        {items.length > 0 ? (
          items.map((item) => <InfoItem>{item.name}</InfoItem>)
        ) : (
          <>
            <InfoItem>{itemName}</InfoItem>
            <InfoItem>{itemName}</InfoItem>
            <InfoItem>{itemName}</InfoItem>
            <InfoItem>{itemName}</InfoItem>
            <InfoItem>{itemName}</InfoItem>
          </>
        )}
      </ul>
    </div>
  );
}
