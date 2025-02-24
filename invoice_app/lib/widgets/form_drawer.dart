import 'package:flutter/material.dart';
import 'package:invoice_app/core/extensions/color_schema.dart';
import 'package:invoice_app/core/extensions/responsive_utils.dart';

class FormDrawer extends StatelessWidget {
  const FormDrawer({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Drawer(
      width: 719,
      backgroundColor: Theme.of(context).colorScheme.surface,
      child: Padding(
        padding: EdgeInsets.fromLTRB(context.isDesktop ? 103 : 0, 0, 0, 0),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 56),
          child: Column(
            // mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.max,
            children: [
              Text(
                'New Invoice',
                style: context.textTheme.headlineSmall!.copyWith(
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 24),
              TextFormField(
                decoration: InputDecoration(
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8),
                    borderSide: BorderSide(
                      color: Theme.of(context).colorScheme.primary,
                    ),
                  ),
                  floatingLabelBehavior: FloatingLabelBehavior.values[1],
                  labelText: 'Client Name',
                  hintText: 'Client Name',
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
