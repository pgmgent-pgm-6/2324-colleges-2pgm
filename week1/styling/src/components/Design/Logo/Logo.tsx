import { Image, ImageStyle, StyleProp } from "react-native";

type Props = {
  style?: StyleProp<ImageStyle>;
};

const Logo = ({ style }: Props) => {
  return <Image style={style} source={require("@assets/logo/logo.png")} />;
};

export default Logo;
