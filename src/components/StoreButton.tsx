import { DealType } from "@/vite-env"
import { Button } from "./ui/button"

type StoreButtonProps = {
    deal: DealType;
    className?: string;
  };

const StoreButton: React.FC<StoreButtonProps> = ({deal , className}) => {
  return (
    <>
    {deal.storeID == "1" ? (
        <Button className={`${className || ""}`} asChild>
          <a
            href={`https://store.steampowered.com/search/?term=${deal.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Steam
          </a>
        </Button>
      ) : (
        ""
      )}{" "}
      {deal.storeID == "2" ? (
        <Button className={`${className || ""}`} asChild>
          <a
            href={`https://www.gamersgate.com/games/?query=${deal.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GamersGate
          </a>
        </Button>
      ) : (
        ""
      )}{" "}
      {deal.storeID == "3" ? (
        <Button className={`${className || ""}`} asChild>
          <a
            href={`https://www.greenmangaming.com/search?query=${deal.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GreenManGaming
          </a>
        </Button>
      ) : (
        ""
      )}
      </>
  )
}

export default StoreButton