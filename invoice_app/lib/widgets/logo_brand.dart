import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

import '../core/styles/color.dart';

class LogoBrand extends StatelessWidget {
  const LogoBrand({
    super.key,
    this.containerSize = 103,
    this.logoSize = 50,
  });

  final double containerSize;
  final double logoSize;

  @override
  Widget build(BuildContext context) {
    return Stack(
      alignment: Alignment.center,
      children: [
        Container(
          height: containerSize,
          width: containerSize,
          decoration: BoxDecoration(
            color: AppColors.primary,
            borderRadius: BorderRadius.only(
              topRight: Radius.circular(20),
              bottomRight: Radius.circular(20),
            ),
          ),
        ),
        Positioned(
          bottom: 0,
          child: Container(
            height: containerSize * 0.5,
            width: containerSize,
            decoration: BoxDecoration(
              color: AppColors.secondary,
              borderRadius: BorderRadius.only(
                topLeft: Radius.circular(20),
                bottomRight: Radius.circular(20),
              ),
            ),
          ),
        ),
        Align(
          alignment: Alignment.center,
          // Centers horizontally and vertically
          child: SvgPicture.asset(
            'logo.svg',
            height: logoSize,
            width: logoSize,
          ),
        ),
      ],
    );
  }
}
