import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_svg/svg.dart';

import '../bloc/theme_cubit.dart';

class ProfileSection extends StatelessWidget {
  const ProfileSection({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<ThemeCubit, ThemeMode>(
      builder: (context, themeMode) {
        final isDarkMode = themeMode == ThemeMode.dark;

        return MediaQuery.of(context).size.width < 768 // Check device width
            ? Row(
                spacing: 16,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  buildThemeToggleButton(context, isDarkMode),
                  buildVerticalDivider(),
                  buildAvatar(),
                  const SizedBox(width: 24),
                ],
              )
            : Column(
                spacing: 16,
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisSize: MainAxisSize.min,
                children: [
                  buildThemeToggleButton(context, isDarkMode),
                  buildDivider(),
                  buildAvatar(),
                  const SizedBox(height: 24),
                ],
              );
      },
    );
  }

  Widget buildThemeToggleButton(BuildContext context, bool isDarkMode) {
    return IconButton(
      onPressed: () {
        context.read<ThemeCubit>().toggleTheme();
      },
      icon: SvgPicture.asset(
        isDarkMode ? 'icon-sun.svg' : 'icon-moon.svg',
      ),
    );
  }

  Widget buildVerticalDivider() {
    return const VerticalDivider(
      width: 0,
      color: Color(0xff494E6E),
      thickness: 1,
    );
  }

  Widget buildDivider() {
    return const Divider(
      height: 0,
      color: Color(0xff494E6E),
      thickness: 1,
    );
  }

  Widget buildAvatar() {
    return const CircleAvatar(
      backgroundImage: AssetImage('image-avatar.jpg'),
    );
  }
}
