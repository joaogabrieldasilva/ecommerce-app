import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
import { IconProps } from "./icon-props";

export function PantsIcon({ size = 20, color, ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M10.492 10.95c-.063-.207-.087-.764-.104-.988l-.06-.646c-.044-.483-.003-1.126-.334-1.525-.158.192-.236.497-.264.736l-.095 1.34c-.055.712-.161 1.423-.293 2.125l-.49 2.157c-.115.387-.226.775-.335 1.164-.274.98-.423 1.705-.504 2.72L8 18.3c-.006.44-.118.44-.48.441H6.186c-.122 0-.327.04-.432-.033l-.012-.008c-.147-.1-.146-.175-.146-.336l-.003-1.678c-.004-.187-.033-.382-.051-.569l-.41-3.346-.159-2.02-.01-.53c-.006-.128-.032-.254-.037-.382l-.009-.665c-.002-.076-.015-.15-.018-.225l.03-2.102.027-.297c.057-.824.16-1.297.38-2.092l.59-2.16.13-.583c.047-.212.047-.388.29-.455l7.144-.003c.173 0 .286.012.37.19l.007.017c.016.034.028.07.035.108L14.926 5.5c.05.16.061.347.079.514l.04.45c.006.061.018.121.021.182l.017 1.02-.019 2.398c-.003.086-.025.172-.028.258l-.012.523c-.003.062-.017.123-.021.185l-.142 1.856-.407 3.144-.038.595-.019 1.57c.002.194.047.373-.132.501l-.015.011c-.09.065-.226.035-.33.035h-1.317c-.699 0-.563-.09-.608-.663l-.113-1.043c-.059-.464-.178-.918-.301-1.368l-.438-1.547a23.834 23.834 0 01-.537-2.368l-.114-.803zm-3.15-9.18l-.784.004c-.026.064-.034.134-.05.201l-.084.398c-.034.147-.088.295-.115.443l6.315.001 1.072-.002-.208-.872c-.012-.044-.021-.14-.05-.17L7.343 1.77zM6.178 3.32l-.521 1.845a.727.727 0 00.162-.142c.315-.377.538-1.195.66-1.693l-.301-.01zm.819-.001c-.019.106-.012.214-.031.321-.1.555-.378 1.534-.832 1.854l-.185.12c-.197.124-.38.033-.401.153-.032.177-.037.359-.055.537l-.081.886v2.244c.01.253.036.505.046.757l.012.433c.004.071.02.139.024.21l.136 1.958c.006.056.019.11.023.167l.407 3.467c.02.26.04.511.04.773l.01.824c.003.063-.005.126.004.188h1.401c.025-.444.045-.898.121-1.337.151-.874.408-1.714.65-2.565l.426-1.687c.143-.67.27-1.353.348-2.034l.075-.831c.024-.273.04-.529.057-.8l.02-.186c.036-.431.09-.816.326-1.19.525-.832 1.061.016 1.17.595l.046.261c.026.134.02.276.034.412l.116 1.414.153 1.17.316 1.597.207.781.024.1.014.046.067.254c.003.015.008.027.013.041l.505 1.813c.051.162.076.342.105.509l.16 1.247c.008.129.024.252.026.383.029.012.072.006.104.006h.269c.341 0 .69.017 1.03 0l.003-1.133c.001-.362.024-.693.056-1.052l.34-2.561.21-2.434c.006-.116.027-.23.03-.348l.044-1.135.019-1.36-.053-1.662c-.017-.265-.03-.533-.072-.795-.06-.025-.13-.029-.19-.048a1.49 1.49 0 01-.694-.433l-.01-.01c-.144-.176-.209-.43-.28-.64-.037-.106-.095-.202-.133-.305a2.763 2.763 0 01-.148-.973l-2.37.01c.091.226.131.445.144.69v1.262c-.002.038 0 .104-.018.138l-.012.017c-.043.063-.083.117-.162.137-.35.088-.295-.348-.291-.53l.002-.523c0-.393.028-.863-.28-1.155-.007.172.022.349.027.522.008.287.005.576-.025.861l-.036.242c-.03.208-.177.906-.49.854-.3-.05-.198-.314-.136-.496l.108-.361c.062-.25.093-.536.087-.793l-.033-.778c-.001-.028.002-.066-.01-.09l-2.527-.01zm6.548 0c.003.319.111.669.207.968.04.127.11.236.164.357.085.19.128.367.333.468l.09.04-.457-1.663c-.014-.055-.02-.116-.047-.165l-.191-.004c-.028 0-.073.006-.1 0z"
        fill="none"
        stroke={color}
      />
    </Svg>
  );
}
