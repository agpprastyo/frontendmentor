import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:invoice_app/core/styles/theme.dart';
import 'package:invoice_app/core/styles/util.dart';
import 'package:invoice_app/screen/home.dart';

import 'bloc/invoice/invoice_bloc.dart';
import 'bloc/theme_cubit.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  // Initialize the InvoiceRepository and load data
  // final invoiceRepository = InvoiceRepository();
  // await invoiceRepository.loadInvoicesFromAsset('data.json');

  runApp(MultiBlocProvider(
    providers: [
      BlocProvider(
        create: (context) => ThemeCubit(),
      ),
      BlocProvider(
          create: (context) =>
              InvoiceBloc()..add(const InvoiceEvent.loadInvoicesFromAsset())),
    ],
    child: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    TextTheme textTheme =
        createTextTheme(context, "League Spartan", "League Spartan");

    MaterialTheme theme = MaterialTheme(textTheme);

    return BlocBuilder<ThemeCubit, ThemeMode>(
      builder: (context, state) {
        return MaterialApp(
          title: 'Flutter Demo',
          themeMode: state,
          darkTheme: theme.dark(),
          theme: theme.light(),
          home: Home(), // Pass the repository here
        );
      },
    );
  }
}
