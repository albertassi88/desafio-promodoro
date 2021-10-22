import { Howl } from "howler";

export default function SoundPlay(src) {
  const sound = new Howl ({
    src,
    html5: true
  });
  sound.play();
}


