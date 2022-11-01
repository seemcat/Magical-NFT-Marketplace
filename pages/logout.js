import { useRouter } from "next/router";
import { Magic } from "magic-sdk";
import { ConnectExtension } from "@magic-ext/connect";
const magicAPIKey = process.env.NEXT_PUBLIC_MAGIC_API_KEY;

export default function Login() {
  const router = useRouter();
  const magic = new Magic(magicAPIKey, {
    network: "goerli",
    locale: "en_US",
    extensions: [new ConnectExtension()],
  });

  magic.connect
    .disconnect()
    .catch((e) => {
      console.log(e);
    })
    .then(() => router.push("/create-nft"));

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12"></div>
    </div>
  );
}
