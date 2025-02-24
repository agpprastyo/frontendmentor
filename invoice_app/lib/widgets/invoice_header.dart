import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:invoice_app/core/extensions/color_schema.dart';

import '../bloc/invoice/invoice_bloc.dart';
import 'filter.dart';

class InvoiceHeader extends StatelessWidget {
  const InvoiceHeader({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<InvoiceBloc, InvoiceState>(builder: (context, state) {
      return Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Invoices', style: context.textTheme.displayLarge),
              Text(
                  state.maybeWhen(
                    orElse: () => '0 invoices',
                    loaded: (invoices) => '${invoices.length} invoices',
                  ),
                  style: context.textTheme.bodyLarge),
            ],
          ),
          Row(
            spacing: 12,
            children: [
              FilterByStatus(),
              Builder(builder: (context) {
                return FilledButton(
                  style: FilledButton.styleFrom(
                      padding: EdgeInsets.only(left: 6, right: 16),
                      minimumSize: Size(0, 56)),
                  onPressed: () {
                    Scaffold.of(context).openDrawer();
                  },
                  child: Row(
                    spacing: 16,
                    children: [
                      Container(
                        width: 38,
                        height: 38,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(99),
                        ),
                        child: Icon(
                          Icons.add,
                          color: Theme.of(context).colorScheme.primary,
                        ),
                      ),
                      Text('New Invoice'),
                    ],
                  ),
                );
              })
            ],
          )
        ],
      );
    });
  }
}
