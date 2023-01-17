/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  Option,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type InitializeMintInstructionAccounts = {
  mint: PublicKey;
  rent?: PublicKey;
};

// Arguments.
export type InitializeMintInstructionData = {
  discriminator: number;
  decimals: number;
  mintAuthority: PublicKey;
  freezeAuthority: Option<PublicKey>;
};

export type InitializeMintInstructionArgs = {
  decimals: number;
  mintAuthority: PublicKey;
  freezeAuthority: Option<PublicKey>;
};

export function getInitializeMintInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<InitializeMintInstructionArgs, InitializeMintInstructionData> {
  const s = context.serializer;
  return mapSerializer<
    InitializeMintInstructionArgs,
    InitializeMintInstructionData,
    InitializeMintInstructionData
  >(
    s.struct<InitializeMintInstructionData>(
      [
        ['discriminator', s.u32],
        ['decimals', s.u8],
        ['mintAuthority', s.publicKey],
        ['freezeAuthority', s.option(s.publicKey)],
      ],
      'InitializeMintInstructionArgs'
    ),
    (value) => ({ discriminator: 0, ...value } as InitializeMintInstructionData)
  ) as Serializer<InitializeMintInstructionArgs, InitializeMintInstructionData>;
}

// Instruction.
export function initializeMint(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: InitializeMintInstructionAccounts & InitializeMintInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );

  // Mint.
  keys.push({ pubkey: input.mint, isSigner: false, isWritable: true });

  // Rent.
  if (input.rent) {
    keys.push({ pubkey: input.rent, isSigner: false, isWritable: false });
  } else {
    keys.push({
      pubkey: context.eddsa.createPublicKey(
        'SysvarRent111111111111111111111111111111111'
      ),
      isSigner: false,
      isWritable: false,
    });
  }

  // Data.
  const data =
    getInitializeMintInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
