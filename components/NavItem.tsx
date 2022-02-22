import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../constants/theme";
import Icon from "react-native-vector-icons/AntDesign";

type Props = {
  focused: boolean;
  icon: string;
  iconSize?: number;
  white?: boolean;
};

const NavItem: React.FC<Props> = ({ focused, icon, white, iconSize }) => {
  return (
    <View style={styles.navItem}>
      <Icon
        size={iconSize ? iconSize : 27}
        name={icon}
        color={
          white
            ? "#fff"
            : focused
            ? theme.colors.primary
            : theme.colors.textSecondary
        }
      />
    </View>
  );
};

export default NavItem;

const styles = StyleSheet.create({
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    textAlign: "center",
    color: theme.colors.textSecondary,
  },
  navLabelFocused: {
    color: theme.colors.primary,
  },
});
