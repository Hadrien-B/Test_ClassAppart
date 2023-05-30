<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CartItem;

class CartController extends Controller
{
    public function index()
    {
        $cartItems = CartItem::all();

        return response()->json($cartItems);
    }

    public function addToCart(Request $request)
    {
        $productId = $request->input('productId');
      

        return response()->json(['message' => 'Le produit a été ajouté au panier'], 201);
    }

    public function removeFromCart($itemId)
    {
        $cartItem = CartItem::find($itemId);
    

        return response()->json(['message' => 'Le produit a été supprimé du panier']);
    }
}
