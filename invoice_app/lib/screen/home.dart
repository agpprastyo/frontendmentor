import 'package:flutter/material.dart';
import 'package:invoice_app/core/extensions/responsive_utils.dart';

import '../widgets/form_drawer.dart';
import '../widgets/invoice_header.dart';
import '../widgets/invoice_items.dart';
import '../widgets/logo_brand.dart';
import '../widgets/profile_section.dart';
import '../widgets/sidebar.dart';

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: context.isMobile || context.isTablet
          ? AppBar(
              backgroundColor: Theme.of(context).colorScheme.tertiaryContainer,
              toolbarHeight: 80,
              leadingWidth: 80,
              leading: LogoBrand(
                containerSize: 80,
                logoSize: 30,
              ),
              actions: [ProfileSection()],
            )
          : null,
      body: Stack(
        children: [
          Scaffold(
            drawer: FormDrawer(),
            drawerEnableOpenDragGesture: true,
            body: Center(
              child: Container(
                padding: EdgeInsets.only(top: context.isDesktop ? 20 : 0),
                constraints: BoxConstraints(maxWidth: 730, maxHeight: 800),
                child: Column(
                  children: [
                    InvoiceHeader(),
                    InvoiceItems(),
                  ],
                ),
              ),
            ),
          ),
          Row(
            children: [
              (context.isDesktop) ? Sidebar() : SizedBox.shrink(),
            ],
          ),
        ],
      ),
    );
  }
}
