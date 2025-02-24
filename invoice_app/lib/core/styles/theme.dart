import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:invoice_app/core/styles/color.dart";

class MaterialTheme {
  final TextTheme textTheme;

  const MaterialTheme(this.textTheme);

  static ColorScheme lightScheme() {
    return ColorScheme.fromSeed(seedColor: AppColors.primary).copyWith(
      brightness: Brightness.light,
      primary: AppColors.primary,
      tertiaryContainer: Color(0xff373B53),
      surface: AppColors.surface,
      onSurface: AppColors.background,
      primaryContainer: Colors.white,
    );
  }

  ThemeData light() {
    return theme(lightScheme());
  }

  static ColorScheme darkScheme() {
    return ColorScheme.fromSeed(seedColor: AppColors.primary).copyWith(
      brightness: Brightness.dark,
      primary: AppColors.primary,
      tertiaryContainer: Color(0xff1E2139),
      surface: AppColors.darkSurface,
      onSurface: AppColors.light1,
      primaryContainer: AppColors.dark1,
    );
  }

  ThemeData dark() {
    return theme(darkScheme());
  }

  ThemeData theme(ColorScheme colorScheme) => ThemeData(
        useMaterial3: true,
        brightness: colorScheme.brightness,
        colorScheme: colorScheme,
        textTheme: textTheme.copyWith().apply(
              fontFamily: GoogleFonts.leagueSpartan().fontFamily,
              bodyColor: colorScheme.onSurface,
              displayColor: colorScheme.onSurface,
            ),
        scaffoldBackgroundColor: colorScheme.surface,
        canvasColor: colorScheme.surface,
      );

  List<ExtendedColor> get extendedColors => [];
}

class ExtendedColor {
  final Color seed, value;
  final ColorFamily light;
  final ColorFamily lightHighContrast;
  final ColorFamily lightMediumContrast;
  final ColorFamily dark;
  final ColorFamily darkHighContrast;
  final ColorFamily darkMediumContrast;

  const ExtendedColor({
    required this.seed,
    required this.value,
    required this.light,
    required this.lightHighContrast,
    required this.lightMediumContrast,
    required this.dark,
    required this.darkHighContrast,
    required this.darkMediumContrast,
  });
}

class ColorFamily {
  const ColorFamily({
    required this.color,
    required this.onColor,
    required this.colorContainer,
    required this.onColorContainer,
  });

  final Color color;
  final Color onColor;
  final Color colorContainer;
  final Color onColorContainer;
}
