import 'package:flutter/material.dart';

extension ColorSchema on BuildContext {
  ColorScheme get colorScheme => Theme.of(this).colorScheme;
}

extension TextStyles on BuildContext {
  TextTheme get textTheme => Theme.of(this).textTheme;
}
