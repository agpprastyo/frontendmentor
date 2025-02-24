import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:invoice_app/core/extensions/string.dart';

import '../bloc/invoice/invoice_bloc.dart';

class FilterByStatus extends StatefulWidget {
  const FilterByStatus({super.key});

  @override
  State<FilterByStatus> createState() => _FilterByStatusState();
}

class _FilterByStatusState extends State<FilterByStatus> {
  final List<String> statuses = ['draft', 'pending', 'paid'];
  List<String> selectedStatuses = [];

  void _filterInvoices() {
    context
        .read<InvoiceBloc>()
        .add(InvoiceEvent.filterInvoices(selectedStatuses));
  }

  @override
  Widget build(BuildContext context) {
    return MenuAnchor(
      alignmentOffset: const Offset(-20, 20),
      style: MenuStyle(
        backgroundColor: WidgetStatePropertyAll(
            Theme.of(context).colorScheme.primaryContainer),
        elevation: WidgetStatePropertyAll(20),
        minimumSize: WidgetStatePropertyAll(const Size(100, 56)),
      ),
      builder:
          (BuildContext context, MenuController controller, Widget? child) {
        return BlocBuilder<InvoiceBloc, InvoiceState>(
          builder: (context, state) {
            return state.maybeWhen(
              orElse: () => const SizedBox.shrink(),
              loaded: (invoices) => TextButton(
                onPressed: invoices.isEmpty
                    ? null
                    : () {
                        if (controller.isOpen) {
                          controller.close();
                        } else {
                          controller.open();
                        }
                      },
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      'Filter by status',
                      style: Theme.of(context).textTheme.bodyLarge!.copyWith(
                            fontWeight: FontWeight.bold,
                            color: Theme.of(context).colorScheme.primary,
                          ),
                    ),
                    const Icon(Icons.keyboard_arrow_down_rounded, size: 24),
                  ],
                ),
              ),
            );
          },
        );
      },
      menuChildren: [
        ...statuses.map((status) {
          return StatefulBuilder(
            builder: (context, setState) {
              return SizedBox(
                width: 180,
                child: CheckboxListTile(
                  checkboxShape: const RoundedRectangleBorder(),
                  contentPadding: EdgeInsets.zero,
                  visualDensity: VisualDensity.compact,
                  controlAffinity: ListTileControlAffinity.leading,
                  title: Text(status.toTitleCase),
                  value: selectedStatuses.contains(status),
                  onChanged: (isChecked) {
                    setState(() {
                      if (isChecked ?? false) {
                        setState(() {
                          selectedStatuses.add(status);
                          _filterInvoices();
                        });
                      } else {
                        setState(() {
                          selectedStatuses.remove(status);
                          _filterInvoices();
                        });
                      }
                      print('Selected statuses: $selectedStatuses');
                    });
                  },
                ),
              );
            },
          );
        }),
      ],
    );
  }
}
