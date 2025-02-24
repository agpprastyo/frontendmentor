import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTextStyles {
  const AppTextStyles();

  TextStyle get headingL => GoogleFonts.leagueSpartan(
        fontSize: 36,
        decoration: TextDecoration.none,
        fontStyle: FontStyle.normal,
        fontWeight: FontWeight.w700,
        height: 36 / 36,
        letterSpacing: -1.13,
      );

  TextStyle get headingM => GoogleFonts.leagueSpartan(
        fontSize: 24,
        decoration: TextDecoration.none,
        fontStyle: FontStyle.normal,
        fontWeight: FontWeight.w700,
        height: 24 / 24,
        letterSpacing: -0.75,
      );

  TextStyle get headingS => GoogleFonts.leagueSpartan(
        fontSize: 15,
        decoration: TextDecoration.none,
        fontStyle: FontStyle.normal,
        fontWeight: FontWeight.w700,
        height: 24 / 15,
        letterSpacing: -0.25,
      );

  TextStyle get headingSVariant => GoogleFonts.leagueSpartan(
        fontSize: 15,
        decoration: TextDecoration.none,
        fontStyle: FontStyle.normal,
        fontWeight: FontWeight.w700,
        height: 15 / 15,
        letterSpacing: -0.25,
      );

  TextStyle get body => GoogleFonts.leagueSpartan(
        fontSize: 13,
        decoration: TextDecoration.none,
        fontStyle: FontStyle.normal,
        fontWeight: FontWeight.w500,
        height: 18 / 13,
        letterSpacing: -0.11,
      );

  TextStyle get bodyVariant => GoogleFonts.leagueSpartan(
        fontSize: 13,
        decoration: TextDecoration.none,
        fontStyle: FontStyle.normal,
        fontWeight: FontWeight.w500,
        height: 15 / 13,
        letterSpacing: -0.11,
      );
}
