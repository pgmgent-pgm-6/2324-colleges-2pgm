import { formatDate } from "@core/modules/logs/utils";
import IconButton from "@design/Button/IconButton";
import Text from "@design/Text/Text";
import { Variables } from "@style";
import { addDays, subDays } from "date-fns";
import { StyleSheet, View } from "react-native";

type Props = {
  date: Date;
  onDateChange: (date: Date) => void;
};

const DateHeaderPicker = ({ date, onDateChange }: Props) => {
  const handlePrevDayPress = () => {
    onDateChange(subDays(date, 1));
  };

  const handleNextDayPress = () => {
    onDateChange(addDays(date, 1));
  };

  return (
    <View style={styles.container}>
      <IconButton
        title="Previous day"
        color={Variables.colors.white}
        icon="arrow-left-drop-circle-outline"
        onPress={handlePrevDayPress}
      />
      <Text style={styles.text}>{formatDate(date)}</Text>
      <IconButton
        title="Next day"
        color={Variables.colors.white}
        icon="arrow-right-drop-circle-outline"
        onPress={handleNextDayPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Variables.colors.primary900,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Variables.sizes.horizontalPadding,
    paddingVertical: Variables.sizes.small,
  },
  text: {
    flex: 1,
    textAlign: "center",
    color: Variables.colors.white,
  },
});

export default DateHeaderPicker;
